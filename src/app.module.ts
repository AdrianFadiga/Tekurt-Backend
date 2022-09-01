import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoginModule } from './login/login.module';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { FriendModule } from './friend/friend.module';

@Module({
  imports: [
    LoginModule,
    DatabaseModule,
    UserModule,
    PostModule,
    FriendModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
