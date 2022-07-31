import { LoginService } from './login.service';
import { AuthDto } from './dtos';
export declare class LoginController {
    private loginService;
    constructor(loginService: LoginService);
    signIn(dto: AuthDto): Promise<{
        token: string;
    }>;
}
