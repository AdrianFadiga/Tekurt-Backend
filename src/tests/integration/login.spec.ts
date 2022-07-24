import supertest from 'supertest';
import 'dotenv/config';
import { JWT } from '../../utils/tokenUtils';
import { userLogin } from '../unit/mocks/user';

const app = supertest('http://localhost:3030');

describe('Em caso de sucesso', () => {
  it('Testa se o endpoint /login retorna um token', async () => {
    const response = await app.post('/login').send({
      user: 'usuario',
      password: 'teste'
    });

    expect(response.status).toBe(200);
    expect(response.body.token).toBeDefined();

    const decodedToken = JWT.decryptToken(response.body.token);

    const { email, username } = userLogin;
    expect(decodedToken.id).toBeDefined();
    expect(decodedToken.email).toBe(email);
    expect(decodedToken.username).toBe(username);
  });
});

describe('Em casos de erro', () => {
  describe('Caso a requisição seja passada sem os campos', () => {
    it('Caso não passe o campo "user", testa se retorna o status e a mensagem correta', async () => {
      const response = await app.post('/login').send({
        password: 'teste'
      });

      expect(response.status).toBe(400);
      expect(response.body.message).toBeDefined();
      expect(response.body.message).toBe('"user" is required');
    });

    it('Caso não passe o campo "password", testa se retorna o status e a mensagem correta', async () => {
      const response = await app.post('/login').send({
        user: 'usuario'
      });

      expect(response.status).toBe(400);
      expect(response.body.message).toBeDefined();
      expect(response.body.message).toBe('"password" is required');
    });
  });

  describe('Caso seja passado os campos, mas vazio', () => {
    it('Caso o campo "user" esteja vazio, testa se retorna o status e a mensagem correta', async () => {
      const response = await app.post('/login').send({
        user: '',
        password: 'teste'
      });

      expect(response.status).toBe(400);
      expect(response.body.message).toBeDefined();
      expect(response.body.message).toBe('"user" is not allowed to be empty');
    });

    it('Caso o campo "user" esteja vazio, testa se retorna o status e a mensagem correta', async () => {
      const response = await app.post('/login').send({
        user: 'usuario',
        password: ''
      });

      expect(response.status).toBe(400);
      expect(response.body.message).toBeDefined();
      expect(response.body.message).toBe('"password" is not allowed to be empty');
    });
  });
});
