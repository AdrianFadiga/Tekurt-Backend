import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  MaxLength,
  MinLength,
  IsDefined,
  IsNotEmpty,
} from 'class-validator';

export class passwordDto {
  @ApiProperty({
    description: 'Senha atualizada do usuário',
    default: 'novaSenha',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @MinLength(6)
  @MaxLength(20)
  newPassword: string;

  @ApiProperty({
    description: 'Senha atual do usuário',
    default: 'teste',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @MaxLength(20)
  password: string;
}
