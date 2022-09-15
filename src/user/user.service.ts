import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { excludeField } from '../utils/excludeField';
import { UpdateUserDto } from './dtos';
import { UserModel } from './user.model';
import * as bcrypt from 'bcrypt';
import { ImgurClient } from 'imgur';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class UserService {
  constructor(private userModel: UserModel) {}

  async read() {
    const users = await this.userModel.read();
    users.map((user) => excludeField(user, 'password'));

    return users;
  }

  async readByQuery(filter: string) {
    const users = await this.userModel.readByQuery(filter);
    users.map((user) => excludeField(user, 'password'));
    return users;
  }

  async readOne(username: string) {
    const user = await this.userModel.readOne(username);
    if (!user) throw new NotFoundException();
    excludeField(user, 'password');

    return user;
  }

  async findById(id: string) {
    const user = await this.userModel.findById(id);
    if (!user) throw new NotFoundException();
    excludeField(user, 'password');
    return user;
  }

  private async verifyUsernameInUse(username: string) {
    const user = await this.userModel.readOne(username);
    if (user) throw new ConflictException();
  }

  async update(id: string, username: string, dto: UpdateUserDto) {
    if (dto.username && dto.username !== username) {
      await this.verifyUsernameInUse(dto.username);
    }
    const updatedUser = await this.userModel.update(id, dto);
    excludeField(updatedUser, 'password');
    return updatedUser;
  }

  async updatePassword(id: string, password: string, newPassword: string) {
    await this.verifyUserPassword(id, password);
    const cryptoPassword = await bcrypt.hash(newPassword, 10);
    await this.userModel.updatePassword(id, cryptoPassword);
  }

  private async verifyUserPassword(id: string, password: string) {
    const user = await this.userModel.findById(id);
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) throw new UnauthorizedException();
  }

  async delete(id: string, password: string) {
    await this.verifyUserPassword(id, password);
    await this.userModel.delete(id);
  }

  async updatePhoto(id: string, file: Express.Multer.File) {
    let imageUrl = null;
    if (file) imageUrl = await this.uploadImg(file);
    const updatedUser = await this.userModel.updatePhoto(id, imageUrl);
    excludeField(updatedUser, 'password');
    return updatedUser;
  }

  async uploadImg(file: Express.Multer.File) {
    try {
      const imgurClient = new ImgurClient({
        clientId: '0fef92e95267360',
        clientSecret: 'c4f3e10ce33fb41f23a7e9037c642bb3f375d322',
        refreshToken: '835c13fedcbead8c4c02717b49755f63a946fb02',
      });
      const filePath = path.join(
        __dirname,
        '..',
        `../../uploads/${file.filename}`,
      );
      const response = await imgurClient.upload({
        image: fs.createReadStream(filePath) as any,
        type: 'stream',
      });
      fs.unlinkSync(filePath);
      return response.data.link;
    } catch {
      throw new ForbiddenException('Deu ruim no upload');
    }
  }
}
