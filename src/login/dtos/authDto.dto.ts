import { IsDefined, IsNotEmpty } from 'class-validator';

export class AuthDto {
  @IsNotEmpty()
  @IsDefined()
  user: string;

  @IsNotEmpty()
  @IsDefined()
  password: string;

  constructor(user?: string, password?: string) {
    this.user = user;
    this.password = password;
  }
}
