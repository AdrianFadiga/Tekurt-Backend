import {
  GoneException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { PostDto } from './dtos';
import { PostModel } from './post.model';
import { ImgurClient } from 'imgur';
import * as fs from 'fs';
import * as path from 'path';

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

  async create(
    authorId: string,
    file: Express.Multer.File | undefined,
    dto: PostDto,
  ) {
    let mediaUrl = null;
    if (file) mediaUrl = await this.uploadImg(file);
    return this.postModel.create(authorId, dto, mediaUrl);
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

  async uploadImg(file: Express.Multer.File) {
    try {
      const imgurClient = new ImgurClient({
        clientId: '0fef92e95267360',
        clientSecret: 'c4f3e10ce33fb41f23a7e9037c642bb3f375d322',
        refreshToken: '835c13fedcbead8c4c02717b49755f63a946fb02',
      });
      const filePath = path.join(
        __dirname,
        '..',
        `../../uploads/${file.filename}`,
      );
      const response = await imgurClient.upload({
        image: fs.createReadStream(filePath) as any,
        type: 'stream',
      });
      fs.unlinkSync(filePath);
      return response.data.link;
    } catch {
      throw new GoneException('Deu ruim no upload');
    }
  }
}
