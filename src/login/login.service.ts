import { IUserLogin } from './interfaces/IUserLogin';
import { UnauthorizedException, Injectable } from '@nestjs/common';
import { LoginModel } from './login.model';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import TokenSign from 'src/types/TokenSign';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class LoginService {
  private userNotFoundMessage = 'Incorrect user or password';

  constructor(
    private LoginModel: LoginModel, 
    private jwt: JwtService, 
    private config: ConfigService
  ) {}

  private validateUserExists(user: IUserLogin | null) {
    if (!user) throw new UnauthorizedException(this.userNotFoundMessage);
  }

  private async validatePass(password: string, passHash: string) {
    const isValidPassword = await bcrypt.compare(password, passHash);

    if (!isValidPassword) throw new UnauthorizedException(this.userNotFoundMessage);
  }

  async signIn(user: string, password: string) {
    const userData = await this.LoginModel.signIn(user);

    this.validateUserExists(userData);
    await this.validatePass(password, userData.password);

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
    return this.jwt.signAsync({ data: payload }, {expiresIn: '7d', secret: secret});
  }
}
