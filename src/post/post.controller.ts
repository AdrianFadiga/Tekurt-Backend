import {
  Body,
  Controller,
  Delete,
  FileTypeValidator,
  Get,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  Post,
  Put,
  Res,
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
// const fs = require('fs/promises');
// const path = require('path');

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

  @Post('file')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 5000000 }),
          new FileTypeValidator({
            fileType: /(gif|jpe?g|tiff?|png|webp|bmp)$/i,
          }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    const xablau = await this.postService.createImage(file, file.filename);
    return xablau;
  }
}
