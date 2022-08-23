import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty } from 'class-validator';

export class AuthDto {
  @ApiProperty({
    description: 'Nome do usuário que realizará login',
    default: 'usuario',
    required: true,
  })
  @IsNotEmpty()
  @IsDefined()
  user: string;

  @ApiProperty({
    description: 'Senha do usuário que realizará login',
    default: 'teste',
    required: true,
  })
  @IsNotEmpty()
  @IsDefined()
  password: string;

  constructor(user?: string, password?: string) {
    this.user = user;
    this.password = password;
  }
}
