import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { TestimonialModel } from './testimonial.model';

@Injectable()
export class TestimonialService {
  constructor(
    private testimonialModel: TestimonialModel,
    private userService: UserService,
  ) {}
  async findByUserId(userId: string) {
    return this.testimonialModel.findByUserId(userId);
  }

  private async verifyUserExists(receiverId: string) {
    await this.userService.findById(receiverId);
  }

  async findById(id: string) {
    const testimonial = await this.testimonialModel.findById(id);
    if (!testimonial) throw new NotFoundException();
    return testimonial;
  }

  async create(senderId: string, receiverId: string, content: string) {
    if (senderId === receiverId) throw new ConflictException();
    await this.verifyUserExists(receiverId);
    return this.testimonialModel.create(senderId, receiverId, content);
  }

  private async verifyTestimonial(userId: string, testimonialId: string) {
    const testimonial = await this.findById(testimonialId);
    if (testimonial.userId !== userId) throw new UnauthorizedException();
  }

  async update(userId: string, testimonialId: string) {
    await this.verifyTestimonial(userId, testimonialId);
    await this.testimonialModel.update(userId, testimonialId);
  }

  async delete(userId: string, testimonialId: string) {
    const testimonial = await this.findById(testimonialId);
    if (testimonial.userId !== userId && testimonial.senderId !== userId) {
      throw new UnauthorizedException();
    }
    await this.testimonialModel.delete(userId, testimonialId);
  }
}
