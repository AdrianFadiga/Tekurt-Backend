import bcrytp from 'bcrypt';
import { JWT } from './../../../utils/tokenUtils';
import LoginService from '../../../api/services/login.service';
import { userLogin } from '../mocks/user';
import LoginRepository from '../../../api/repositories/login.repository';
import LoginModel from '../../../api/models/login.model';

describe('Testa a "service" de login', () => {
  it('Verifica se a "service" existe', () => {
    expect(typeof LoginService).toBe('function');
  });

  const model = new LoginModel();
  const repository = new LoginRepository(model);
  const service = new LoginService(repository);

  it('Verifica se o método sigIn existe', () => {
    expect(typeof service.sigIn).toBe('function');
  });
  
  describe('Caso o usuário exista e a senha esteja correta', () => {
    beforeEach(() => {
      repository.getByEmailOrUsername = jest.fn().mockResolvedValue(userLogin);
      bcrytp.compare = jest.fn().mockResolvedValue(true);
    });

    afterEach(() => {
      (repository.getByEmailOrUsername as jest.Mock).mockReset();
      (bcrytp.compare as jest.Mock).mockReset();
    });

    const { email, id, username } = userLogin;

    const token = JWT.encryptToken({ email, id, username  });

    it('Testa se retorna o token corretamente', async () => {
      const response = await service.sigIn(userLogin.username, userLogin.password);

      expect(response).toBeDefined();
      const decodedToken = JWT.decryptToken(response);

      expect(decodedToken).toEqual({ email, id, username });
    });
  });

  describe('Caso o usuário nao exista', () => {
    beforeEach(() => {
      repository.getByEmailOrUsername = jest.fn().mockResolvedValue(null);
    });

    afterEach(() => {
      (repository.getByEmailOrUsername as jest.Mock).mockReset();
    });

    it('Testa se retorna um erro com o status "404" e a mensagem "Incorret user or password"', async () => {
      expect.assertions(2);
      try {
        await service.sigIn(userLogin.username, userLogin.password);
      } catch (error: any) {
        expect(error.message).toBe('Incorret user or password');
        expect(error.statusCode).toBe(404);
      }     
    });
  });

  describe('Caso o usuário exista mas a senha esteja incorreta', () => {
    beforeEach(() => {
      repository.getByEmailOrUsername = jest.fn().mockResolvedValue(null);
      bcrytp.compare = jest.fn().mockResolvedValue(false);
    });

    afterEach(() => {
      (repository.getByEmailOrUsername as jest.Mock).mockReset();
      (bcrytp.compare as jest.Mock).mockReset();
    });

    it('Testa se retorna um erro com o status "404" e a mensagem "Incorret user or password', async () => {
      expect.assertions(2);
      try {
        await service.sigIn(userLogin.username, userLogin.password);
      } catch (error: any) {
        expect(error.message).toBe('Incorret user or password');
        expect(error.statusCode).toBe(404);
      } 
    });
  });
});