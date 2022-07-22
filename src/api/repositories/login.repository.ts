import LoginModel from '../models/login.model';

export default class LoginRepository {
  constructor(private model: LoginModel) {}

  public async getByEmailOrUsername(user: string) {
    const userData = await this.model.getByEmailOrUsername(user);

    return userData;
  }
}