import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseFilePipeBuilder,
  Post,
  Put,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { User } from '@prisma/client';
import { GetUser } from '../login/decorator';
import { JwtGuard } from '../login/guard';
import { PostDto } from './dtos';
import { PostService } from './post.service';
import { Express } from 'express';

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

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: /(gif|jpe?g|tiff?|png|webp|bmp)$/i,
        })
        .addMaxSizeValidator({ maxSize: 5000000 })
        .build({
          fileIsRequired: false,
        }),
    )
    file: Express.Multer.File | undefined,
    @GetUser() { id }: User,
    @Body() dto: PostDto,
  ) {
    return this.postService.create(id, file, dto);
  }
}
