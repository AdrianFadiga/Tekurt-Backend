import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { PostDto } from './dtos';
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

  async verifyPostAuthor(tokenId: string, authorId: string) {
    if (tokenId !== authorId) throw new UnauthorizedException('Unauthorized');
  }

  async readOne(id: string) {
    const post = await this.postModel.readOne(id);
    if (!post) throw new NotFoundException('Post not found');
    return post;
  }

  async create(authorId: string, dto: PostDto) {
    return this.postModel.create(authorId, dto);
  }

  async update(postId: string, id: string, dto: PostDto) {
    const { authorId } = await this.readOne(postId);
    await this.verifyPostAuthor(id, authorId);
    return this.postModel.update(postId, dto);
  }

  async delete(postId: string, id: string) {
    const { authorId } = await this.readOne(postId);
    await this.verifyPostAuthor(id, authorId);
    await this.postModel.delete(postId);
  }
}
