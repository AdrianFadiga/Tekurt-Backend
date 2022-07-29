import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { LoginService } from './login.service';
import { AuthLogin } from './middlewares';

@Controller('login')
export class LoginController {
  constructor(private loginService: LoginService) {}

  @Post('')
  @HttpCode(200)
  async signIn(@Body() body: AuthLogin) {
    const { user, password } = body;
    return this.loginService.signIn(user, password);

  }

}
