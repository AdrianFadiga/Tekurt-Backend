import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from 'src/login/decorator';
import { JwtGuard } from 'src/login/guard';
import { FriendService } from './friend.service';

@Controller('friend')
@UseGuards(JwtGuard)
export class FriendController {
  constructor(private friendService: FriendService) {}

  @Get('me')
  async getMe(@GetUser() { id }: User) {
    return this.friendService.getMe(id);
  }

  @Get('/:id')
  async readAll(@Param('id') id: string) {
    return this.friendService.readAll(id);
  }

  @Post('/:friendId')
  async create(
    @Param('friendId') friendId: string,
    @GetUser('id') { id }: User,
  ) {
    return this.friendService.create(friendId, id);
  }

  @Patch('/:friendId')
  async update(
    @Param('friendId') friendId: string,
    @GetUser('id') { id }: User,
  ) {
    return this.friendService.update(friendId, id);
  }

  @Delete('/:friendId')
  async delete(
    @Param('friendId') friendId: string,
    @GetUser('id') { id }: User,
  ) {
    await this.friendService.delete(friendId, id);
  }
}
