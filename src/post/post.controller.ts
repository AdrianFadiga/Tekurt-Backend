import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Put,
    UseGuards,
  } from '@nestjs/common';
  import { User } from '@prisma/client';
  import { GetUser } from '../login/decorator';
  import { JwtGuard } from '../login/guard';
import { PostService } from './post.service';
  
  @UseGuards(JwtGuard)
  @Controller('posts')
  export class PostController {
    constructor(private postService: PostService) {}

    @Get('me')
    async getMe(@GetUser() {id}: User) {
      return {id}
    }

  };