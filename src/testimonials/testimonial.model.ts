import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class TestimonialModel {
  constructor(private databaseService: DatabaseService) {}

  async findByUserId(userId: string) {
    return this.databaseService.testimonial.findMany({
      where: { userId },
    });
  }

  async findById(id: string) {
    return this.databaseService.testimonial.findUnique({
      where: { id },
    });
  }

  async create(senderId: string, receiverId: string, content: string) {
    return this.databaseService.testimonial.create({
      data: {
        senderId,
        userId: receiverId,
        content,
      },
    });
  }

  async update(userId: string, testimonialId: string) {
    return this.databaseService.testimonial.updateMany({
      where: {
        AND: [{ userId }, { id: testimonialId }],
      },
      data: {
        status: 'accepted',
      },
    });
  }

  async delete(userId: string, testimonialId: string) {
    return this.databaseService.testimonial.deleteMany({
      where: {
        OR: [
          {
            AND: [{ userId }, { id: testimonialId }],
          },
          {
            AND: [{ senderId: userId }, { id: testimonialId }],
          },
        ],
      },
    });
  }
}
