import { LoginModel } from './login.model';
import { JwtService } from '@nestjs/jwt';
import TokenSign from 'src/types/TokenSign';
import { ConfigService } from '@nestjs/config';
export declare class LoginService {
    private LoginModel;
    private jwt;
    private config;
    private userNotFoundMessage;
    constructor(LoginModel: LoginModel, jwt: JwtService, config: ConfigService);
    private validateUserExists;
    private validatePass;
    signIn(user: string, password: string): Promise<string>;
    signToken({ email, id, username }: TokenSign): Promise<string>;
}
