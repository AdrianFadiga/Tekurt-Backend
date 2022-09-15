import { ApiProperty } from '@nestjs/swagger';
import { MaxLength } from 'class-validator';

export class PostDto {
  @ApiProperty({
    description: 'Conteúdo do post',
    default: 'Texto contendo o conteúdo do post',
    required: true,
  })
  @MaxLength(300)
  content: string;
}
