import { LoginModel } from './login.model';
export declare class LoginService {
    private LoginModel;
    constructor(LoginModel: LoginModel);
    signIn(user: string, password: string): Promise<{
        id: string;
        username: string;
        email: string;
        password: string;
    }>;
}
