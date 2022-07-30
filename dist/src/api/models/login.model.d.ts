export default class LoginModel {
    getByEmailOrUsername(user: string): Promise<{
        username: string;
        email: string;
        id: string;
        password: string;
    }>;
}
