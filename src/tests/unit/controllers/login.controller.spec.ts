import { Request, Response } from 'express';
import LoginController from '../../../api/controllers/login.controller';
import LoginModel from '../../../api/models/login.model';
import LoginRepository from '../../../api/repositories/login.repository';
import LoginService from '../../../api/services/login.service';
import { JWT } from '../../../utils/tokenUtils';
import { userLogin } from '../mocks/user';
import mockExpress from '../mocks/express.mock';

describe('Testa a "controller" de login', () => {
  it('Verifica se a controller existe', () => {
    expect(typeof LoginController).toBe('function');
  });

  const model = new LoginModel();
  const repository = new LoginRepository(model);
  const service = new LoginService(repository);
  const controller = new LoginController(service);

  it('Verifica se o método sigIn existe', () => {
    expect(typeof controller.sigIn).toBe('function');
  });

  describe('Em casos de sucesso', () => {
    const { email, id, username } = userLogin
    const token = JWT.encryptToken({ email, id, username });

    beforeEach(() => {
      service.sigIn = jest.fn().mockResolvedValue(token);
    });

    afterEach(() => {
      (service.sigIn as jest.Mock).mockReset();
    });

    const req = mockExpress.mockRequest();
    const res = mockExpress.mockResponse();

    it('Testa se responde com status e token correto', async () => {
      await controller.sigIn(req, res);

      expect(res.status).toBeCalledWith(200);
      expect(res.json).toBeCalledWith({ token });
    });
  });
});

