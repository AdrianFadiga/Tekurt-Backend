import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from 'src/login/decorator';
import { JwtGuard } from 'src/login/guard';
import { TestimonialDto } from './dtos';
import { TestimonialService } from './testimonial.service';

@UseGuards(JwtGuard)
@Controller('testimonials')
export class TestimonialController {
  constructor(private testimonialService: TestimonialService) {}
  @Get('me')
  async getMe(@GetUser() { id }: User) {
    return this.testimonialService.findByUserId(id);
  }

  @Get('')
  async getAll() {
    return this.testimonialService.getAll();
  }

  @Get('/user/:id')
  async getByUserId(@Param('id') userId: string) {
    return this.testimonialService.findByUserId(userId);
  }

  @Get('/:id')
  async getById(@Param('id') id: string) {
    return this.testimonialService.findById(id);
  }

  @Post('/:id')
  async create(
    @GetUser() { id }: User,
    @Param('id') receiverId: string,
    @Body() { content }: TestimonialDto,
  ) {
    return this.testimonialService.create(id, receiverId, content);
  }

  @Patch('/:id')
  async update(@GetUser() { id }: User, @Param('id') testimonialId: string) {
    return this.testimonialService.update(id, testimonialId);
  }

  @Delete('/:id')
  async delete(@GetUser() { id }: User, @Param('id') testimonialId: string) {
    return this.testimonialService.delete(id, testimonialId);
  }
}
