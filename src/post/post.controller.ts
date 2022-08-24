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
import { PostDto } from './dtos';
import { PostService } from './post.service';

@UseGuards(JwtGuard)
@Controller('posts')
export class PostController {
  constructor(private postService: PostService) {}

  @Get('/me')
  async getMe(@GetUser() { id }: User) {
    return this.postService.readAll(id);
  }

  @Get('/user/:id')
  async readAll(@Param('id') id: string) {
    return this.postService.readAll(id);
  }

  @Get('/:id')
  async readOne(@Param('id') id: string) {
    return this.postService.readOne(id);
  }

  @Post()
  async create(@GetUser() { id }: User, @Body() dto: PostDto) {
    return this.postService.create(id, dto);
  }

  @Put('/:postId')
  async update(
    @Param('postId') postId: string,
    @GetUser() { id }: User,
    @Body() dto: PostDto,
  ) {
    return this.postService.update(postId, id, dto);
  }

  @Delete('/:postId')
  async delete(@Param('postId') postId: string, @GetUser() { id }: User) {
    return this.postService.delete(postId, id);
  }
}
