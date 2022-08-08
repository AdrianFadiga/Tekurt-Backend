import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { excludeField } from '../utils/excludeField';
import { UserDto } from './dtos';
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

  private validateUser(userId: string, paramId: string) {
    if (userId !== paramId) throw new UnauthorizedException();
  }

  async update(id: string, paramId: string, dto: Omit<UserDto, 'password'>) {
    this.validateUser(id, paramId);
    await this.userModel.update(id, dto);
  }

  async updatePassword(id: string, password: any, paramId: string) {
    this.validateUser(id, paramId);
    const cryptoPassword = await bcrypt.hash(password, 10);
    await this.userModel.updatePassword(id, cryptoPassword);
  }

  async delete(id: string, paramId: string) {
    this.validateUser(id, paramId);
    await this.userModel.delete(id);
  }
}
