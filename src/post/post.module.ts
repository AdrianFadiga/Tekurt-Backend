import { PostController } from './post.controller';
import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostModel } from './post.model';
import { UserModule } from '../user/user.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  providers: [PostService, PostModel],
  controllers: [PostController],
  imports: [
    UserModule,
    MulterModule.registerAsync({
      useFactory: () => ({
        dest: './uploads',
      }),
    }),
  ],
})
export class PostModule {}
