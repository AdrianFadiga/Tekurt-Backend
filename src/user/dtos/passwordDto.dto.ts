import {
  IsString,
  MaxLength,
  MinLength,
  IsDefined,
  IsNotEmpty,
} from 'class-validator';

export class passwordDto {
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @MinLength(6)
  @MaxLength(20)
  password: string;
}
