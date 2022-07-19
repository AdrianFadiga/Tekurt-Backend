import UserRepository from '../repository/user.repository';

export default class UserService {
  constructor(private repository: UserRepository) {}

  public async getByEmailOrUsername(user: string) {
    const userData = await this.repository.getByEmailOrUsername(user);
    console.log('service', userData);
    

    return userData;
  }
}