import LoginModel from '../../../api/models/login.model'
import { userLogin } from '../mocks/user';
import { prisma } from '../../../../prisma/prismaClient'

describe('Testa a "model" de Login', () => {
  it('Verifica se a model existe', () => {
    expect(typeof LoginModel).toBe('function');
  });

  it('Verifica se o método getByEmailOrUsername existe', () => {
    const model = new LoginModel();
    expect(typeof model.getByEmailOrUsername).toBe('function');
  });

  describe('Em caso de sucesso', () => {
    beforeEach(() => {
      prisma.user.findFirst = jest.fn().mockResolvedValue(userLogin);
    });

    afterEach(() => {
      (prisma.user.findFirst as jest.Mock).mockReset();
    });

    it('Testa se retorna o usuario com os dados corretos ao passar o username', async () => {
      const model = new LoginModel();

      const response = await model.getByEmailOrUsername(userLogin.username);

      expect(response).toEqual(userLogin);
    });
  });
});
