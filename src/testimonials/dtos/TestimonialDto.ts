import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class TestimonialDto {
  @ApiProperty({
    description: 'Depoimento',
    default: 'O que dizer desse cara que eu mal conheço e já considero pakas?',
    required: true,
  })
  @IsString()
  @MaxLength(500)
  @IsNotEmpty()
  @IsDefined()
  content: string;
}
