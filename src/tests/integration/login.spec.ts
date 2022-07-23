import supertest from 'supertest';
import 'dotenv/config';

const app = supertest('http://localhost:3030');

describe('Em caso de sucesso', () => {
  it('Testa se o endpoint /login retorna um token', async () => {
    const response = await app.post('/login').send({
      user: 'usuario',
      password: 'teste'
    });

    console.log(response.body);

    expect(response.status).toBe(200);
  });
});
