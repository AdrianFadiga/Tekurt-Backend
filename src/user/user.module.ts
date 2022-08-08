import { UserController } from './user.controller';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserModel } from './user.model';

@Module({
  providers: [UserService, UserModel],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
