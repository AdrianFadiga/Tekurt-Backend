import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class DeleteUserDto {
  @ApiProperty({
    description: 'Confirmação da senha do usuário',
    default: 'teste',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
