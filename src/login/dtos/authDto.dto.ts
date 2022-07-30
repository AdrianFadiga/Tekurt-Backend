import { IsNotEmpty, IsString } from 'class-validator';

export class AuthDto {
  @IsNotEmpty()
    user: string;

  @IsString()
  @IsNotEmpty()
    password: string;
}
