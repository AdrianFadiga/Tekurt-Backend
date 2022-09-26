import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsNotEmpty,
  IsOptional,
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
  @MaxLength(15)
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
  @MaxLength(20)
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
  @MaxLength(15)
  @IsOptional()
  username: string;

  @ApiProperty({
    description: 'Status social do usuário',
    default: 1,
    required: false,
  })
  @IsOptional()
  @IsNotEmpty()
  socialStatusId: number;

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
    default: 2,
    required: false,
  })
  @IsOptional()
  drinkingId: number;

  @ApiProperty({
    description: 'Signo do usuário',
    default: 2,
    required: false,
  })
  @IsOptional()
  @IsNotEmpty()
  signId: number;

  @ApiProperty({
    description: 'Biografia do usuário',
    default: 'Biografia que o usuário deseja colocar no perfil',
    required: false,
  })
  @IsOptional()
  @IsNotEmpty()
  @MaxLength(300)
  biography: string;
}
