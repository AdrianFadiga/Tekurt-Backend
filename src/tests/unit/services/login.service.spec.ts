import { JWT } from './../../../utils/tokenUtils';
import UserService from '../../../api/services/login.service';
import { userLogin } from '../mocks/user';
import UserRepository from '../../../api/repositories/login.repository';
import UserModel from '../../../api/models/login.model';

describe('Testa a "service" de user', () => {
  it('Verifica se a "service" existe', () => {
    expect(typeof UserService).toBe('function');
  });

  const model = new UserModel();
  const repository = new UserRepository(model);
  const service = new UserService(repository);

  it('Verifica se o método getByEmailOrUsername existe', () => {
    expect(typeof service.sigIn).toBe('function');
  });
  
  describe('Caso o usuário exista e a senha esteja correta', () => {
    beforeEach(() => {
      repository.getByEmailOrUsername = jest.fn().mockResolvedValue(userLogin);
    });

    const { email, id, username } = userLogin;

    const token = JWT.encryptToken({ email, id, username  });

    it('Testa se retorna o token corretamente', async () => {
      const response = await service.sigIn(userLogin.username);

      expect(response).toBe(token);
      const decodedToken = JWT.decryptToken(response);

      expect(decodedToken).toEqual({ email, id, username });
    });
  });
});