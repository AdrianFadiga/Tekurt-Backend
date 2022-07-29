import LoginRepository from '../repositories/login.repository';
export default class LoginService {
    private repository;
    constructor(repository: LoginRepository);
    sigIn(user: string, password: string): Promise<string>;
}
