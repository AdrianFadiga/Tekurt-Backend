import UserService from '../../../api/services/login.service';
import { userMock } from '../mocks/user';
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
    expect(typeof service.getByEmailOrUsername).toBe('function');
  });
  
  describe('Caso o usuário exista e a senha esteja correta', () => {
    beforeEach(() => {
      repository.getByEmailOrUsername = jest.fn().mockResolvedValue(userMock);
    });

    it('Testa se retorna o token corretamente', () => {
      
    });
  });
});