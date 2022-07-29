import { Injectable } from '@nestjs/common';
import { LoginModel } from './login.model';

@Injectable()
export class LoginService {
  constructor(private LoginModel: LoginModel) {}
  async signIn(user: string, password: string) {
    return this.LoginModel.signIn(user);
  }
}
