import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class FriendModel {
  constructor(private databaseService: DatabaseService) {}

  async getMe(id: string) {
    return this.databaseService.friend.findMany({
      where: { userId: id },
    });
  }

  async readAll(id: string) {
    return this.databaseService.friend.findMany({
      where: { userId: id },
    });
  }

  async readOne(friendId: string, id: string) {
    return this.databaseService.friend.findUnique({
      where: {
        userId_friendId: {
          friendId,
          userId: id,
        },
      },
    });
  }

  async readPendingInvite(friendId: string, id: string) {
    return this.databaseService.friend.findFirst({
      where: {
        AND: [{ friendId }, { userId: id }, { status: 'pending' }],
      },
    });
  }

  async create(friendId: string, id: string) {
    return this.databaseService.friend.create({
      data: {
        userId: id,
        friendId,
      },
    });
  }

  async update(friendId: string, id: string) {
    const acceptedRequest = this.databaseService.friend.update({
      where: {
        userId_friendId: {
          friendId,
          userId: id,
        },
      },
      data: {
        status: 'accepted',
      },
    });
    const createFriend = this.databaseService.friend.create({
      data: {
        userId: friendId,
        friendId: id,
        status: 'accepted',
      },
    });
    await this.databaseService.$transaction([acceptedRequest, createFriend]);
    return acceptedRequest;
  }

  async delete(friendId: string, id: string) {
    await this.databaseService.friend.deleteMany({
      where: {
        OR: [
          {
            AND: [{ userId: id }, { friendId }],
          },
          {
            AND: [{ userId: friendId }, { friendId: id }],
          },
        ],
      },
    });
  }
}
