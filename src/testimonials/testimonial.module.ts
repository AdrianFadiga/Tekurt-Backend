import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { TestimonialController } from './testimonial.controller';
import { TestimonialModel } from './testimonial.model';
import { TestimonialService } from './testimonial.service';

@Module({
  imports: [UserModule],
  controllers: [TestimonialController],
  providers: [TestimonialService, TestimonialModel],
})
export class TestimonialModule {}
