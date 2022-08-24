import { IsDefined, IsNotEmpty, IsOptional, MaxLength } from 'class-validator';

export class PostDto {
  @IsDefined()
  @IsNotEmpty()
  @MaxLength(300)
  content: string;

  @IsNotEmpty()
  @IsOptional()
  mediaUrl: string;
}
