import { IsDefined, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class TestimonialDto {
  @IsString()
  @MaxLength(500)
  @IsNotEmpty()
  @IsDefined()
  content: string;
}
