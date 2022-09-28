import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { FriendModel } from './friend.model';
import { UserService } from 'src/user/user.service';

@Injectable()
export class FriendService {
  constructor(
    private friendModel: FriendModel,
    private userService: UserService,
  ) {}

  async getMe(id: string) {
    const friends = await this.friendModel.getMe(id);
    const invites = await this.friendModel.getInvites(id);
    return { friends, invites };
  }

  async readAll(id: string) {
    return this.friendModel.readAll(id);
  }

  async verifyInviteExists(friendId: string, id: string) {
    const alreadyInvited = await this.friendModel.readOne(friendId, id);
    if (alreadyInvited) throw new ConflictException();
    return this.friendModel.readOne(id, friendId);
  }

  async create(friendId: string, id: string) {
    await this.verifyUserExists(friendId);
    const inviteExists = await this.verifyInviteExists(friendId, id);
    if (!inviteExists) return this.friendModel.create(friendId, id);
    return this.update(friendId, id);
  }

  async verifyUserExists(id: string) {
    await this.userService.findById(id);
  }

  async verifyPendingInvite(friendId: string, id: string) {
    const pedingInvite = await this.friendModel.readPendingInvite(friendId, id);
    if (!pedingInvite) throw new NotFoundException();
  }

  async update(friendId: string, id: string) {
    await this.verifyPendingInvite(friendId, id);
    return this.friendModel.update(friendId, id);
  }

  async delete(friendId: string, id: string) {
    await this.friendModel.delete(friendId, id);
  }
}
