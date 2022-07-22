import UserModel from '../../../api/models/login.model'
import { userLogin } from '../mocks/user';
import { prisma } from '../../../database/prismaClient'

describe('Testa a "model" de User', () => {
  it('Verifica se a model existe', () => {
    expect(typeof UserModel).toBe('function');
  });

  it('Verifica se o método getByEmailOrUsername existe', () => {
    const model = new UserModel();
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
      const model = new UserModel();

      const response = await model.getByEmailOrUsername(userLogin.username);

      expect(response).toEqual(userLogin);
    });
  });
});
