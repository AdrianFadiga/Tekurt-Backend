import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsUrl,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({
    description: 'Nome do usuário',
    default: 'João',
    required: false,
  })
  @IsNotEmpty()
  @IsDefined()
  @MinLength(3)
  @MaxLength(30)
  @IsOptional()
  firstName: string;

  @ApiProperty({
    description: 'Sobrenome do usuário',
    default: 'Da Silva',
    required: false,
  })
  @IsNotEmpty()
  @IsDefined()
  @MinLength(3)
  @MaxLength(30)
  @IsOptional()
  lastName: string;

  @ApiProperty({
    description: 'Username do usuário',
    default: 'JoaoDaSilva_Sk8',
    required: false,
  })
  @IsNotEmpty()
  @IsDefined()
  @MinLength(3)
  @MaxLength(30)
  @IsOptional()
  username: string;

  @ApiProperty({
    description: 'Email do usuário',
    default: 'joaodasilva@email.com',
    required: false,
  })
  @IsEmail()
  @IsNotEmpty()
  @IsDefined()
  @MaxLength(30)
  @IsOptional()
  email: string;

  @ApiProperty({
    description: 'Imagem de perfil do usuário',
    default:
      'https://i.pinimg.com/736x/34/a1/a8/34a1a8ccc9603e62ce305fbc7e8bb1ea.jpg',
    required: false,
  })
  @IsOptional()
  @IsUrl()
  @IsNotEmpty()
  imageUrl: string;

  @ApiProperty({
    description: 'Status social do usuário',
    default: '1',
    required: false,
  })
  @IsOptional()
  @IsNotEmpty()
  socialStatusId: string;

  @ApiProperty({
    description: 'Usuário possui filho?',
    default: true,
    required: false,
  })
  @IsOptional()
  @IsNotEmpty()
  children: boolean;

  @ApiProperty({
    description: 'Usuário fumante?',
    default: false,
    required: false,
  })
  @IsOptional()
  @IsNotEmpty()
  smokes: boolean;

  @ApiProperty({
    description: 'Frequência que o usuário bebe',
    default: '1',
    required: false,
  })
  @IsOptional()
  drinkingId: string;

  @ApiProperty({
    description: 'Signo do usuário',
    default: '2',
    required: false,
  })
  @IsOptional()
  @IsNotEmpty()
  signId: string;

  @ApiProperty({
    description: 'Biografia do usuário',
    default: 'Biografia que o usuário deseja colocar no perfil',
    required: false,
  })
  @IsOptional()
  @IsNotEmpty()
  @MaxLength(500)
  biography: string;
}
