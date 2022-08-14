import { ConfigService } from '@nestjs/config';
import { DatabaseService } from '../../database/database.service';
import { LoginModel } from './../login.model';
import { Test, TestingModule } from '@nestjs/testing';
import { createdUser, createUser, loginModelResponse } from './mocks';

describe('LoginModel', () => {
  let loginModel: LoginModel;
  let databaseService: DatabaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoginModel, DatabaseService, ConfigService],
    }).compile();

    loginModel = module.get<LoginModel>(LoginModel);
    databaseService = module.get<DatabaseService>(DatabaseService);

    databaseService.user.findFirst = jest
      .fn()
      .mockResolvedValue(loginModelResponse);

    databaseService.user.create = jest.fn().mockResolvedValueOnce(createdUser);
  });

  it('Deve ser definido', () => {
    expect(loginModel).toBeDefined();
    expect(databaseService).toBeDefined();
  });

  describe('signIn', () => {
    it('Deve retornar um usuario', async () => {
      const result = await loginModel.signIn('usuario');

      expect(databaseService.user.findFirst).toHaveBeenCalledTimes(1);
      expect(result).toEqual(loginModelResponse);
    });
  });

  describe('Create', () => {
    it('Deve retornar um usuário criado', async () => {
      const result = await loginModel.create(createUser);
      expect(databaseService.user.create).toHaveBeenCalledTimes(1);
      expect(databaseService.user.create).toHaveBeenCalledWith({
        data: { ...createUser },
      });
      expect(result).toEqual(createdUser);
    });
  });
});
