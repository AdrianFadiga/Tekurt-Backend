export default class LoginModel {
    getByEmailOrUsername(user: string): Promise<{
        id: string;
        username: string;
        email: string;
        password: string;
    }>;
}
