import UserModel from '../models/user.model';

export default class UserRepository {
  constructor(private model: UserModel) {}

  public async getByEmailOrUsername(user: string) {
    const userData = await this.model.getByEmailOrUsername(user);

    return userData;
  }
}