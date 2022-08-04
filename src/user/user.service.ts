import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UserDto } from './dtos';
import { UserModel } from './user.model';

@Injectable()
export class UserService {
  constructor(private userModel: UserModel) {}

  async read() {
    const users = await this.userModel.read();
    return users;
  }

  async readOne(id: string) {
    const user = await this.userModel.readOne(id);
    if (!user) throw new NotFoundException();
    return user;
  }

  async validateUser(userId: string, paramId: string) {
    if (userId !== paramId) throw new UnauthorizedException();
  }

  async update(id: string, dto: UserDto) {
    await this.userModel.update(id, dto);
  }

  async delete(id: string) {
    await this.readOne(id);
    await this.userModel.delete(id);
  }
}