import { AuthDto } from './dtos/authDto.dto';
import { IUserLogin } from './interfaces/IUserLogin';
import {
  UnauthorizedException,
  Injectable,
  ConflictException,
} from '@nestjs/common';
import { LoginModel } from './login.model';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UserDto } from 'src/user/dtos';
import { TokenSign } from './interfaces/TokenSign';

@Injectable()
export class LoginService {
  private userNotFoundMessage = 'Incorrect user or password';

  constructor(
    private LoginModel: LoginModel,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  private validateUserExists(user: IUserLogin | null) {
    if (!user) throw new UnauthorizedException(this.userNotFoundMessage);
  }

  private async validatePass(password: string, passHash: string) {
    const isValidPassword = await bcrypt.compare(password, passHash);
    if (!isValidPassword)
      throw new UnauthorizedException(this.userNotFoundMessage);
  }

  async signIn(dto: AuthDto) {
    const userData = await this.LoginModel.signIn(dto.user);

    this.validateUserExists(userData);
    await this.validatePass(dto.password, userData.password);

    const { email, id, username } = userData;
    const token = await this.signToken({ email, id, username });

    return token;
  }

  async verifyEmailInUse(email: string) {
    const user = await this.LoginModel.findByEmail(email);
    if (user) throw new ConflictException();
  }

  async create(dto: UserDto) {
    await this.verifyEmailInUse(dto.email);
    dto.password = await bcrypt.hash(dto.password, 10);
    const newUser = await this.LoginModel.create(dto);
    const { email, id, username } = newUser;
    const token = await this.signToken({ email, id, username });
    return token;
  }

  signToken({ email, id, username }: TokenSign) {
    const payload = { email, sub: id, username };
    const config = { expiresIn: '7d', secret: this.config.get('JWT_SECRET') };

    const token = this.jwt.sign(payload, config);

    return { access_token: token };
  }
}
