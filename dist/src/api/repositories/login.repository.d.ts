import LoginModel from '../models/login.model';
export default class LoginRepository {
    private model;
    constructor(model: LoginModel);
    getByEmailOrUsername(user: string): Promise<{
        username: string;
        email: string;
        id: string;
        password: string;
    }>;
}
