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
