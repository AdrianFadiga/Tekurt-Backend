import LoginModel from '../models/login.model';
export default class LoginRepository {
    private model;
    constructor(model: LoginModel);
    getByEmailOrUsername(user: string): Promise<{
        id: string;
        username: string;
        email: string;
        password: string;
    }>;
}
