import { IsDefined, IsNotEmpty, IsString } from 'class-validator';

export class AuthDto {
  @IsNotEmpty()
  @IsDefined()
    user: string;

  @IsString()
  @IsNotEmpty()
  @IsDefined()
    password: string;
}
