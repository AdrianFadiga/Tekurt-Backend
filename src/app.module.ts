import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoginModule } from './login/login.module';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    LoginModule,
    DatabaseModule,
    UserModule,
    PostModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
