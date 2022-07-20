import LoginModel from '../models/login.model';

export default class LoginRepository {
  constructor(private model: LoginModel) {}

  public async getByEmailOrUsername(user: string) {
    const userData = await this.model.getByEmailOrUsername(user);

    if (!userData) return userData;

    const { email, username, password, id } = userData;

    return { email, username, password, id };
  }
}