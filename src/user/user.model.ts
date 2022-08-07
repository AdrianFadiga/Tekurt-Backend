import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { UserDto } from './dtos';

@Injectable()
export class UserModel {
  constructor(private database: DatabaseService) {}

  async read() {
    const users = await this.database.user.findMany();

    return users;
  }

  async readOne(username: string) {
    const user = await this.database.user.findUnique({
      where: { username },
    });

    return user;
  }

  async update(id: string, dto: Omit<UserDto, 'password'>) {
    await this.database.user.update({
      where: { id },
      data: { ...dto },
    });
  }

  async updatePassword(id: string, password: any) {
    await this.database.user.update({
      where: { id },
      data: { password },
    });
  }

  async delete(id: string) {
    await this.database.user.delete({
      where: { id },
    });
  }
}
