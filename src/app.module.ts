import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoginModule } from './login/login.module';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { FriendModule } from './friend/friend.module';
import { OptionsModule } from './options/options.module';

@Module({
  imports: [
    LoginModule,
    DatabaseModule,
    UserModule,
    PostModule,
    FriendModule,
    OptionsModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
