import { LoginService } from './login.service';
import { AuthDto } from './dtos';
import { UserDto } from 'src/user/dtos';
export declare class LoginController {
    private loginService;
    constructor(loginService: LoginService);
    signIn(dto: AuthDto): Promise<{
        token: string;
    }>;
    create(dto: UserDto): Promise<{
        message: string;
        token: string;
    }>;
}
