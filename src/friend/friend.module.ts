import { Module } from '@nestjs/common';
import { FriendService } from './friend.service';
import { FriendController } from './friend.controller';
import { FriendModel } from './friend.model';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [UserModule],
  providers: [FriendService, FriendModel],
  controllers: [FriendController],
})
export class FriendModule {}
