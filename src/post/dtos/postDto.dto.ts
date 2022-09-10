import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, MaxLength } from 'class-validator';

export class PostDto {
  @ApiProperty({
    description: 'Conteúdo do post',
    default: 'Texto contendo o conteúdo do post',
    required: true,
  })
  @IsDefined()
  @IsNotEmpty()
  @MaxLength(300)
  content: string;
}
