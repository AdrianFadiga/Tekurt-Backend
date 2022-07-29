import { LoginService } from './login.service';
import { AuthLogin } from './middlewares';
export declare class LoginController {
    private loginService;
    constructor(loginService: LoginService);
    signIn(body: AuthLogin): Promise<{
        id: string;
        username: string;
        email: string;
        password: string;
    }>;
}
