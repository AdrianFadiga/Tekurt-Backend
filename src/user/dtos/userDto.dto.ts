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
  @IsNotEmpty()
  @IsDefined()
  @MinLength(3)
  @MaxLength(30)
  firstName: string;

  @IsNotEmpty()
  @IsDefined()
  @MinLength(3)
  @MaxLength(30)
  lastName: string;

  // retirar a senha para o front nao ter q passar pela requisição
  // fazer uma rota só para att a senha
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @MinLength(6)
  @MaxLength(20)
  password: string;

  @IsNotEmpty()
  @IsDefined()
  @MinLength(3)
  @MaxLength(30)
  username: string;

  @IsEmail()
  @IsNotEmpty()
  @IsDefined()
  @MaxLength(30)
  email: string;

  @IsOptional()
  @IsUrl()
  imageUrl: string;

  @IsOptional()
  socialStatusId: string;

  @IsOptional()
  children: boolean;

  @IsOptional()
  smokes: boolean;

  @IsOptional()
  drinkingId: string;

  @IsOptional()
  signId: string;

  @IsOptional()
  @MaxLength(500)
  biography: string;
}
