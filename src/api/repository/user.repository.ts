import UserModel from '../models/user.model';

export default class userRepository {
  constructor(private model: UserModel) {}

  public async getByEmail(user: string) {
    const userData = await this.model.getByEmailOrUsername(user);

    return userData;
  }
}