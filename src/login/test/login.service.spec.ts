import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { LoginModel } from '../login.model';
import { LoginService } from '../login.service';
import { loginModelResponse, loginUser, token } from './mocks';
import * as bcrypt from 'bcrypt';

describe('LoginService', () => {
  let loginService: LoginService;
  let loginModel: LoginModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LoginService,
        {
          provide: LoginModel,
          useValue: {
            signIn: jest.fn().mockResolvedValue(loginModelResponse),
            findByEmailOrUsername: jest.fn(),
            create: jest.fn(),
          },
        },
        JwtService,
        ConfigService,
      ],
    }).compile();

    loginService = module.get<LoginService>(LoginService);
    loginModel = module.get<LoginModel>(LoginModel);
  });

  it('Deve ser definido', () => {
    expect(loginService).toBeDefined();
    expect(loginModel).toBeDefined();
  });

  describe('signIn', () => {
    describe('Em casos de sucesso', () => {
      it('Deve retornar um token em "access_token"', async () => {
        jest.spyOn(bcrypt, 'compare').mockResolvedValueOnce(true);
        const result = await loginService.signIn(loginUser);

        expect(loginModel.signIn).toHaveBeenCalledTimes(1);
        expect(result).toHaveProperty('access_token');
        expect(typeof result.access_token).toBe('string');
      });
    });

    describe('Em casos de erro', () => {
      it('Deve retornar um erro caso o usuário não exista', () => {});
    });
  });
});
