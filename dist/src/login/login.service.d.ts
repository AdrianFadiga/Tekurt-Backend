import { LoginModel } from './login.model';
import { JwtService } from '@nestjs/jwt';
import TokenSign from 'src/types/TokenSign';
import { ConfigService } from '@nestjs/config';
import { UserDto } from 'src/user/dtos';
export declare class LoginService {
    private LoginModel;
    private jwt;
    private config;
    private userNotFoundMessage;
    constructor(LoginModel: LoginModel, jwt: JwtService, config: ConfigService);
    private validateUserExists;
    private validatePass;
    signIn(user: string, password: string): Promise<string>;
    verifyEmailInUse(email: string): Promise<void>;
    create(dto: UserDto): Promise<string>;
    signToken({ email, id, username }: TokenSign): Promise<string>;
}
