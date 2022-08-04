import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { excludeField } from 'src/utils/excludeField';
import { UserDto } from './dtos';

@Injectable()
export class UserModel {
  constructor(private database: DatabaseService) {}

  async read() {
    const users = await this.database.user.findMany();
    users.map((user) => excludeField(user, 'password'));
    return users;
  }

  async readOne(id: string) {
    const user = await this.database.user.findUnique({
      where: {id}
    });
    delete user?.password; 
    return user;
  }

  async update(id: string, dto: UserDto) {
    await this.database.user.update({
      where: {id},
      data: {...dto}
    });
  }

  async delete(id: string) {
    await this.database.user.delete({
      where: {id}
    });
  }
}