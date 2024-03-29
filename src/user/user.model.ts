import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { UpdateUserDto } from './dtos';

@Injectable()
export class UserModel {
  constructor(private database: DatabaseService) {}

  async read() {
    const users = await this.database.user.findMany();

    return users;
  }

  async readByQuery(filter: string) {
    const splitedFilter = filter.split(' ');
    const users = await this.database.user.findMany({
      where: {
        OR: [
          { firstName: { in: splitedFilter } },
          { lastName: { in: splitedFilter } },
          { username: { in: splitedFilter } },
          { firstName: { contains: filter } },
          { lastName: { contains: filter } },
          { username: { contains: filter } },
        ],
      },
    });
    return users;
  }

  async readOne(username: string) {
    const user = await this.database.user.findUnique({
      where: { username },
      include: {
        friends: {
          include: {
            friend: {
              select: {
                firstName: true,
                lastName: true,
                username: true,
                imageUrl: true,
              },
            },
          },
        },
        invites: {
          where: { status: 'pending' },
        },
        testimonials: {
          include: {
            sender: {
              select: {
                firstName: true,
                lastName: true,
                username: true,
                imageUrl: true,
              },
            },
          },
        },
        socialStatus: { select: { option: true } },
        sign: { select: { option: true } },
        drinking: { select: { option: true } },
      },
    });

    return user;
  }

  async findById(id: string) {
    const user = await this.database.user.findUnique({
      where: { id },
    });

    return user;
  }

  async update(id: string, dto: UpdateUserDto) {
    const updatedUser = await this.database.user.update({
      where: { id },
      data: { ...dto },
    });
    return updatedUser;
  }

  async updatePassword(id: string, password: any) {
    const updatedUser = await this.database.user.update({
      where: { id },
      data: { password },
    });
    return updatedUser;
  }

  async delete(id: string) {
    await this.database.user.delete({
      where: { id },
    });
  }

  async updatePhoto(id: string, imageUrl: string) {
    const updatedUser = await this.database.user.update({
      where: { id },
      data: { imageUrl },
    });
    return updatedUser;
  }
}
