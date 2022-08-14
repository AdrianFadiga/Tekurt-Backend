import { PostController } from './post.controller';
import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostModel } from './post.model';
import { UserModule } from 'src/user/user.module';

@Module({
  providers: [PostService, PostModel],
  controllers: [PostController],
  imports: [UserModule],
})
export class PostModule {}
