import UserRepository from '../repositories/user.repository';

export default class UserService {
  constructor(private repository: UserRepository) {}

  public async getByEmailOrUsername(user: string) {
    const userData = await this.repository.getByEmailOrUsername(user);    

    return userData;
  }
}