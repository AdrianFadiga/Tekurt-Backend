import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthLogin {
  // @IsEmail()
  @IsNotEmpty()
    user: string;

  @IsString()
  @IsNotEmpty()
    password: string;
}
