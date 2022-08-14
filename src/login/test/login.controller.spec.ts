import { Test, TestingModule } from '@nestjs/testing';
import { LoginController } from '../login.controller';
import { LoginService } from '../login.service';
import { loginUser, token } from './mocks';

describe('LoginController', () => {
  let loginController: LoginController;
  let loginService: LoginService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoginController],
      providers: [
        {
          provide: LoginService,
          useValue: {
            signIn: jest.fn().mockResolvedValue(token),
            create: jest.fn(),
          },
        },
      ],
    }).compile();

    loginController = module.get<LoginController>(LoginController);
    loginService = module.get<LoginService>(LoginService);
  });

  it('Deve ser definido', () => {
    expect(loginController).toBeDefined();
    expect(loginService).toBeDefined();
  });

  describe('signIn', () => {
    it('Deve retornar um token na "access_controll"', async () => {
      const result = await loginController.signIn(loginUser);

      expect(loginService.signIn).toHaveBeenCalledTimes(1);
      expect(result).toEqual(token);
    });
  });
});
