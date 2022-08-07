import { AuthDto } from './dtos/authDto.dto';
import { IUserLogin } from './interfaces/IUserLogin';
import {
  Injectable,
  ConflictException,
  ForbiddenException,
} from '@nestjs/common';
import { LoginModel } from './login.model';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { TokenSign } from './interfaces/TokenSign';
import { UserDto } from '../user/dtos';

@Injectable()
export class LoginService {
  private userNotFoundMessage = 'Incorrect user or password';

  constructor(
    private LoginModel: LoginModel,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  private validateUserExists(user: IUserLogin | null) {
    if (!user) throw new ForbiddenException(this.userNotFoundMessage);
  }

  private async validatePass(password: string, passHash: string) {
    const isValidPassword = await bcrypt.compare(password, passHash);
    if (!isValidPassword)
      throw new ForbiddenException(this.userNotFoundMessage);
  }

  async signIn(dto: AuthDto) {
    const userData = await this.LoginModel.signIn(dto.user);

    this.validateUserExists(userData);
    await this.validatePass(dto.password, userData.password);

    const { email, id, username } = userData;

    return this.signToken({ email, id, username });
  }

  async verifyEmailInUse(email: string, username: string) {
    const user = await this.LoginModel.findByEmailOrUsername(email, username);
    // alterar o cod para 422? 403 é para put
    if (user) throw new ConflictException();
  }

  async create(dto: UserDto) {
    await this.verifyEmailInUse(dto.email, dto.username);

    dto.password = await bcrypt.hash(dto.password, 10);
    const newUser = await this.LoginModel.create(dto);

    const { email, id, username } = newUser;
    return this.signToken({ email, id, username });
  }

  signToken({ email, id, username }: TokenSign) {
    const payload = { email, sub: id, username };
    const config = { expiresIn: '7d', secret: this.config.get('JWT_SECRET') };

    const token = this.jwt.sign(payload, config);

    return { access_token: token };
  }
}
