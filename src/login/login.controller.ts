import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from './login.service';
import { AuthDto } from './dtos';


@Controller('login')
export class LoginController {
  constructor(private loginService: LoginService) {}

  @Post('')
  async signIn(@Body() dto: AuthDto) {
    const { user, password } = dto;
    const token = await this.loginService.signIn(user, password);
    return {token};

  }

}
