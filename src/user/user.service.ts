import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { excludeField } from '../utils/excludeField';
import { UpdateUserDto } from './dtos';
import { UserModel } from './user.model';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private userModel: UserModel) {}

  async read() {
    const users = await this.userModel.read();
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
    if (user) throw new ConflictException('O username já existe');
  }

  async update(id: string, username: string, dto: UpdateUserDto) {
    if (dto.username && dto.username !== username) {
      await this.verifyUsernameInUse(dto.username);
    }
    const updatedUser = await this.userModel.update(id, dto);
    excludeField(updatedUser, 'password');
    return updatedUser;
  }

  async updatePassword(id: string, password: string) {
    const cryptoPassword = await bcrypt.hash(password, 10);
    await this.userModel.updatePassword(id, cryptoPassword);
  }

  private async verifyUserPassword(id: string, password: string) {
    const user = await this.userModel.findById(id);
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) throw new UnauthorizedException('Senha inválida!');
  }

  async delete(id: string, password: string) {
    await this.verifyUserPassword(id, password);
    await this.userModel.delete(id);
  }
}
