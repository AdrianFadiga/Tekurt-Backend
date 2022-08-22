import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class SignUpDto {
  @ApiProperty({
    description: 'Nome do usuário',
    default: 'João',
    required: true,
  })
  @IsNotEmpty()
  @IsDefined()
  @MinLength(3)
  @MaxLength(30)
  firstName: string;

  @ApiProperty({
    description: 'Sobrenome do usuário',
    default: 'Da Silva',
    required: true,
  })
  @IsNotEmpty()
  @IsDefined()
  @MinLength(3)
  @MaxLength(30)
  lastName: string;

  @ApiProperty({
    description: 'Senha do usuário',
    default: '123456',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @MinLength(6)
  @MaxLength(20)
  password: string;

  @ApiProperty({
    description: 'Username do usuário',
    default: 'JoaoDaSilva_Sk8',
    required: true,
  })
  @IsNotEmpty()
  @IsDefined()
  @MinLength(3)
  @MaxLength(30)
  username: string;

  @ApiProperty({
    description: 'Email do usuário',
    default: 'joaodasilva@email.com',
    required: true,
  })
  @IsEmail()
  @IsNotEmpty()
  @IsDefined()
  @MaxLength(30)
  email: string;
}
