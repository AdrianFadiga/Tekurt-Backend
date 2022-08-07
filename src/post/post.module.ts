import { PostController } from './post.controller';
import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostModel } from './post.model';

@Module({
  providers: [PostService, PostModel],
  controllers: [PostController],
})
export class PostModule {}
