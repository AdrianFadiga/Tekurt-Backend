import { UserController } from './user.controller';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserModel } from './user.model';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  providers: [UserService, UserModel],
  controllers: [UserController],
  exports: [UserService],
  imports: [
    MulterModule.registerAsync({
      useFactory: () => ({
        dest: './uploads',
      }),
    }),
  ],
})
export class UserModule {}
