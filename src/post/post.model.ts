import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

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
}
