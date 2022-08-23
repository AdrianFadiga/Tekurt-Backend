import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { SignUpDto } from './dtos';

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

  async create(dto: SignUpDto) {
    const newUser = await this.database.user.create({
      data: { ...dto },
    });

    return newUser;
  }
}
