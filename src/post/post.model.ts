import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { PostDto } from './dtos';

@Injectable()
export class PostModel {
  constructor(private database: DatabaseService) {}

  async readAll(id: string) {
    const userPosts = await this.database.post.findMany({
      where: { authorId: id },
    });
    return userPosts;
  }

  async readOne(id: string) {
    const post = await this.database.post.findUnique({
      where: { id },
    });
    return post;
  }

  async create(authorId: string, dto: PostDto) {
    const newPost = await this.database.post.create({
      data: { ...dto, authorId },
    });
    return newPost;
  }

  async update(postId: string, dto: PostDto) {
    const updatedPost = await this.database.post.update({
      where: { id: postId },
      data: { ...dto, updatedAt: new Date() },
    });
    return updatedPost;
  }

  async delete(postId: string) {
    await this.database.post.delete({
      where: { id: postId },
    });
  }
}
