import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { LoginService } from './login.service';
import { AuthDto } from './dtos';
import { UserDto } from '../user/dtos';

@Controller('auth')
export class LoginController {
  constructor(private loginService: LoginService) {}

  @Post('/signin')
  @HttpCode(200)
  signIn(@Body() dto: AuthDto) {
    return this.loginService.signIn(dto);
  }

  @Post('/signup')
  create(@Body() dto: UserDto) {
    return this.loginService.create(dto);
  }
}
