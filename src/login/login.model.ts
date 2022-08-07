import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { UserDto } from 'src/user/dtos';

@Injectable()
export class LoginModel {
  constructor(private database: DatabaseService) {}

  async signIn(user: string) {
    const userData = await this.database.user.findFirst({
      where: {
        OR: [{ email: user }, { username: user }],
      },
      select: {
        username: true,
        id: true,
        email: true,
        password: true,
      },
    });

    return userData;
  }

  async findByEmailOrUsername(email: string, username: string) {
    const user = await this.database.user.findFirst({
      where: {
        OR: [{ email }, { username }],
      },
    });

    return user;
  }

  async create(dto: UserDto) {
    const newUser = await this.database.user.create({
      data: { ...dto },
    });

    return newUser;
  }
}
