import { GenerateError } from './../../utils/generateError';
import { JWT } from '../../utils/tokenUtils';
import LoginRepository from '../repositories/login.repository';
import bcrytp from 'bcrypt';

export default class LoginService {
  constructor(private repository: LoginRepository) {}

  public async sigIn(user: string, password: string) {
    const userData = await this.repository.getByEmailOrUsername(user);
    if (!userData) throw new GenerateError(404, 'Incorret user or password');

    const isValidPassword = await bcrytp.compare(password, userData.password);
    if (!isValidPassword) throw new GenerateError(404, 'Incorret user or password');

    const { email, id, username } = userData;    
    const token = JWT.encryptToken({ email, id, username });

    return token;
  }
}