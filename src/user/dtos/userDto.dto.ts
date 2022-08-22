import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UserDto {
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

  // retirar a senha para o front nao ter q passar pela requisição
  // fazer uma rota só para att a senha
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

  // @ApiPropertyOptional({
  //   description: 'Imagem de perfil do usuário',
  // })
  @IsOptional()
  @IsUrl()
  imageUrl: string;

  // @ApiPropertyOptional({
  // description: 'Status social do usuário',
  // })
  @IsOptional()
  socialStatusId: string;

  // @ApiPropertyOptional({
  //   description: 'Usuário possui crianças?',
  //   required: false,
  // })
  @IsOptional()
  children: boolean;

  // @ApiPropertyOptional({
  //   description: 'Usuário fumante?',
  // })
  @IsOptional()
  smokes: boolean;

  // @ApiPropertyOptional({
  //   description: 'Frequência que o usuário bebe',
  // })
  @IsOptional()
  drinkingId: string;

  // @ApiPropertyOptional({
  //   description: 'Signo do usuário',
  // })
  @IsOptional()
  signId: string;

  // @ApiPropertyOptional({
  //   description: 'Biografia do usuário',
  // })
  @IsOptional()
  @MaxLength(500)
  biography: string;
}
