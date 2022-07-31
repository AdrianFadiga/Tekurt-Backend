import { UnauthorizedException, Injectable } from '@nestjs/common';
import { LoginModel } from './login.model';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import TokenSign from 'src/types/TokenSign';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class LoginService {
  constructor(
    private LoginModel: LoginModel, 
    private jwt: JwtService, 
    private config: ConfigService
  ) {}

  async signIn(user: string, password: string) {
    const userData = await this.LoginModel.signIn(user);
    if (!userData) throw new UnauthorizedException('Incorrect user or password');
    const isValidPassword = await bcrypt.compare(password, userData.password);
    if (!isValidPassword) throw new UnauthorizedException('Incorrect user or password');
    const { email, id, username } = userData;
    const token = await this.signToken({email, id, username});
    return token;
  }

  async signToken({email, id, username}: TokenSign): Promise<string> {
    const payload = {
      email,
      id,
      username
    };
    const secret = this.config.get('JWT_SECRET');
    return this.jwt.signAsync(payload, {expiresIn: '7d', secret: secret});
  }
}
