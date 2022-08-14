// import { UserDto } from 'src/user/dtos';
import { AuthDto } from './../src/login/dtos/authDto.dto';
import { ValidationPipe, INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import * as pactum from 'pactum';
import 'dotenv/config';
import { execSync } from 'child_process';
import {
  BodyEmpty,
  ForbiddenException,
  PassEmpty,
  PassUndefined,
  UserEmpty,
  UserUndefined,
} from './responses/errors';
import { UserDto } from '../src/user/dtos';

describe('Testes da rota Login', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();

    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );

    await app.init();
    await app.listen(process.env.PORT);

    pactum.request.setBaseUrl(`http://localhost:${process.env.PORT || 3001}`);
  });

  afterAll(async () => {
    app.close();
    execSync('npm run db:test:restart');
  });

  const login: AuthDto = {
    user: 'usuario',
    password: 'teste',
  };

  // nao consigo usar UserDto
  const createUser = {
    firstName: 'mario',
    lastName: 'romario',
    username: 'mario128',
    password: 'senha_teste',
    email: 'mario@gmail.com',
  };

  describe('Em casos de sucesso', () => {
    describe('Signin', () => {
      it('Testa se retorna o token e status correto', () => {
        return pactum
          .spec()
          .post(`/auth/signin`)
          .withBody(login)
          .expectStatus(200)
          .expectBodyContains('access_token');
      });
    });

    describe('Signup', () => {
      it('Testa se retorna o token e status correto', () => {
        return pactum
          .spec()
          .post(`/auth/signup`)
          .withBody(createUser)
          .expectStatus(201)
          .expectBodyContains('access_token');
      });
    });
  });

  describe('Em casos de erro', () => {
    describe('Signin', () => {
      it('Retorna a mensagem e status correto caso o usuário não exista', () => {
        return pactum
          .spec()
          .post(`/auth/signin`)
          .withBody({
            user: 'inexistente',
            password: login.password,
          })
          .expectStatus(403)
          .expectBodyContains('message')
          .expectBody(ForbiddenException);
      });

      it('Retorna a mensagem e status correto caso a senha esteja incorreta', () => {
        return pactum
          .spec()
          .post(`/auth/signin`)
          .withBody({
            user: login.user,
            password: 'senha errada',
          })
          .expectStatus(403)
          .expectBodyContains('message')
          .expectBody(ForbiddenException);
      });

      it('Retorna a mensagem e status correto caso não passe o usuario', () => {
        return pactum
          .spec()
          .post(`/auth/signin`)
          .withBody({
            password: login.password,
          })
          .expectStatus(400)
          .expectBodyContains('message')
          .expectBody(UserUndefined);
      });

      it('Retorna a mensagem e status correto caso passe um usuário vazio', () => {
        return pactum
          .spec()
          .post(`/auth/signin`)
          .withBody({
            user: '',
            password: login.password,
          })
          .expectStatus(400)
          .expectBodyContains('message')
          .expectBody(UserEmpty);
      });

      it('Retorna a mensagem e status correto caso não passe a senha', () => {
        return pactum
          .spec()
          .post(`/auth/signin`)
          .withBody({
            user: login.user,
          })
          .expectStatus(400)
          .expectBodyContains('message')
          .expectBody(PassUndefined);
      });

      it('Retorna a mensagem e status correto caso passe uma senha vazia', () => {
        return pactum
          .spec()
          .post(`/auth/signin`)
          .withBody({
            user: login.user,
            password: '',
          })
          .expectStatus(400)
          .expectBodyContains('message')
          .expectBody(PassEmpty);
      });

      it('Retorna a mensagem e status correto caso não passe nenhum campo', () => {
        return pactum
          .spec()
          .post(`/auth/signin`)
          .expectStatus(400)
          .expectBodyContains('message')
          .expectBody(BodyEmpty);
      });
    });

    // it('should throw if password is empty', () => {
    //   return pactum
    //     .spec()
    //     .post(`/auth/signup`)
    //     .withBody({ email: dto.user })
    //     .expectStatus(400);
    // });

    // it('should throw if no body provided', () => {
    //   return pactum.spec().post(`/auth/signup`).expectStatus(400);
    // });
  });
});
