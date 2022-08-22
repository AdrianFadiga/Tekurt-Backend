import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UseGuards,
} from '@nestjs/common';
import { LoginService } from './login.service';
import { AuthDto } from './dtos';
import { UserDto } from '../user/dtos';
import { JwtGuard } from './guard';
import { GetUser } from './decorator';
import { User } from '@prisma/client';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('auth')
export class LoginController {
  constructor(private loginService: LoginService) {}

  @UseGuards(JwtGuard)
  @ApiBearerAuth()
  @Get('/me')
  getMe(@GetUser() userId: User) {
    return userId;
  }

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
