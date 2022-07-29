import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { LoginModel } from './login.model';


@Module({
  providers: [LoginService, LoginModel],
  controllers: [LoginController]
})
export class LoginModule {}
