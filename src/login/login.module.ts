import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { LoginModel } from './login.model';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy';

@Module({
  imports: [JwtModule.register({})],
  providers: [LoginService, LoginModel, JwtStrategy],
  controllers: [LoginController],
})
export class LoginModule {}