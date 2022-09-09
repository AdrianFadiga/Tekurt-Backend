import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsOptional, MaxLength } from 'class-validator';

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

  xablau: string;

  // @ApiProperty({
  //   description: 'Foto do post',
  //   default:
  //     'https://img.freepik.com/fotos-gratis/recuperar-labrador_155003-149.jpg',
  //   required: false,
  // })
  // @IsNotEmpty()
  // @IsOptional()
  // mediaUrl: string;
}
