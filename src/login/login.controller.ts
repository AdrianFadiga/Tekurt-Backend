import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { LoginService } from './login.service';
import { AuthDto } from './dtos';
import { UserDto } from 'src/user/dtos';


@Controller('auth')
export class LoginController {
  constructor(private loginService: LoginService) {}

  @Post('/signin')
  @HttpCode(200)
  async signIn(@Body() dto: AuthDto) {
    const { user, password } = dto;
    const token = await this.loginService.signIn(user, password);

    return {token};
  }

  @Post('/signup')
  async create(@Body() dto: UserDto) {
    const token = await this.loginService.create(dto);
    return {message: 'Created',
      token};
  }
}
