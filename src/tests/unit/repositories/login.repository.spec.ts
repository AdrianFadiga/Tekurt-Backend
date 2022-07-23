import LoginRepository from '../../../api/repositories/login.repository';
import { userLogin } from '../mocks/user';
import LoginModel from '../../../api/models/login.model';

describe('Testa a "repository" de Login', () => {
  it('Verifica se a "repository" existe', () => {
    expect(typeof LoginRepository).toBe('function');
  });

  const model = new LoginModel();
  const repository = new LoginRepository(model);

  it('Verifica se o método getByEmailOrUsername existe', () => {
    expect(typeof repository.getByEmailOrUsername).toBe('function');
  });

  describe('Caso o usuário exista', () => {
    beforeEach(() => {
      model.getByEmailOrUsername = jest.fn().mockResolvedValue(userLogin)
    });

    afterEach(() => {
      (model.getByEmailOrUsername as jest.Mock).mockReset();
    });

    it('Testa se retorna as informações especificas', async () => {
      const response = await repository.getByEmailOrUsername(userLogin.username);

      expect(response).toStrictEqual(userLogin);
    });
  });

  describe('Caso o usuário não exista', () => {
    beforeEach(() => {
      model.getByEmailOrUsername = jest.fn().mockResolvedValue(null)
    });

    afterEach(() => {
      (model.getByEmailOrUsername as jest.Mock).mockReset();
    });

    it('Testa se retorna null', async () => {
      const response = await repository.getByEmailOrUsername(userLogin.username);

      expect(response).toBe(null);
    });
  });
});