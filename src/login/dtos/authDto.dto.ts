import { IsDefined, IsNotEmpty } from 'class-validator';

export class AuthDto {
  @IsNotEmpty()
  @IsDefined()
  user: string;

  @IsNotEmpty()
  @IsDefined()
  password: string;
}
