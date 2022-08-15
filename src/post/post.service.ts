import { Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { PostModel } from './post.model';

@Injectable()
export class PostService {
  constructor(private postModel: PostModel, private userService: UserService) {}

  async verifyUserExists(id: string) {
    await this.userService.findById(id);
  }

  async readAll(id: string) {
    await this.verifyUserExists(id);
    return this.postModel.readAll(id);
  }

  async readOne(id: string) {
    const post = await this.postModel.readOne(id);
    if (!post) throw new NotFoundException('Post not found');
    return post;
  }
}
