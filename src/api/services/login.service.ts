import LoginRepository from '../repositories/login.repository';

export default class LoginService {
  constructor(private repository: LoginRepository) {}

  public async getByEmailOrUsername(user: string) {
    const userData = await this.repository.getByEmailOrUsername(user);    

    return userData;
  }
}