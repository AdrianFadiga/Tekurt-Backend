import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
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
  async getMe(@GetUser() { id }: User) {
    return { id };
  }

  @Get('/user/:id')
  async readAll(@Param('id') id: string) {
    return this.postService.readAll(id);
  }

  @Get('/:id')
  async readOne(@Param('id') id) {
    return this.postService.readOne(id);
  }

  @Post()
  async create(@GetUser() { id }: User) {
    return id;
  }

  @Put()
  async update() {}

  @Delete()
  async delete() {}
}
