import { Test, TestingModule } from '@nestjs/testing';
import { LoginController } from '../login.controller';

describe('LoginController', () => {
  let loginController: LoginController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoginController],
    }).compile();

    loginController = module.get<LoginController>(LoginController);
  });

  it('should be defined', () => {
    expect(loginController).toBeDefined();
  });
});
