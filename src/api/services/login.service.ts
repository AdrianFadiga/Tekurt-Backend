import { JWT } from '../../utils/tokenUtils';
import LoginRepository from '../repositories/login.repository';

export default class LoginService {
  constructor(private repository: LoginRepository) {}

  public async sigIn(user: string) {
    const userData = await this.repository.getByEmailOrUsername(user);

    if (!userData) return '';
    
    const { email, id, username } = userData;
    
    const token = JWT.encryptToken({ email, id, username });

    return token;
  }
}