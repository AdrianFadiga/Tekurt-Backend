import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseService } from '../../database/database.service';
import { UserModel } from '../user.model';
import {
  deleteMock,
  findByIdMock,
  findManyMock,
  findUniqueMock,
  idPasswordMock,
  passwordMock,
  updateDtoMock,
  updateMock,
  updatePasswordMock,
  userIdMock,
  userKeys,
  usernameMock,
} from './mocks';

describe('Testes User Model', () => {
  let userModel: UserModel;
  let databaseService: DatabaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserModel, DatabaseService, ConfigService],
    }).compile();

    userModel = module.get<UserModel>(UserModel);
    databaseService = module.get<DatabaseService>(DatabaseService);
    databaseService.user.findMany = jest.fn().mockResolvedValue(findManyMock);
    databaseService.user.findUnique = jest
      .fn()
      .mockResolvedValue(findUniqueMock);
    databaseService.user.update = jest.fn().mockResolvedValue(updateMock);
    databaseService.user.delete = jest.fn().mockResolvedValue(deleteMock);
  });

  it('Deve ser definido', () => {
    expect(userModel).toBeDefined();
    expect(databaseService).toBeDefined();
  });

  describe('Read', () => {
    it('Deve retonar uma array de usuários', async () => {
      const result = await userModel.read();
      expect(Object.keys(result[0])).toEqual(userKeys);
      expect(Array.isArray(result)).toEqual(true);
    });
  });
  describe('ReadOne', () => {
    it('Deve retornar um único usuário', async () => {
      const result = await userModel.readOne(usernameMock);
      expect(result).toEqual(findUniqueMock);
      expect(typeof result).toEqual('object');
      expect(Object.keys(result)).toEqual(userKeys);
    });
  });
  describe('FindById', () => {
    it('Deve retornar um único usuário', async () => {
      const result = await userModel.findById(userIdMock);
      expect(result).toEqual(findByIdMock);
      expect(typeof result).toEqual('object');
      expect(Object.keys(result)).toEqual(userKeys);
    });
  });
  describe('Update', () => {
    it('Deve retornar o usuário editado', async () => {
      const result = await userModel.update(userIdMock, updateDtoMock);
      expect(result).toEqual(updateMock);
      expect(typeof result).toEqual('object');
      expect(Object.keys(result)).toEqual(userKeys);
    });
  });
  describe('updatePassword', () => {
    it('Deve retornar o usuário com a senha modificada', async () => {
      const result = await userModel.updatePassword(
        idPasswordMock,
        passwordMock,
      );
      expect(result).toEqual(updatePasswordMock);
      expect(typeof result).toEqual('object');
      expect(Object.keys(result)).toEqual(userKeys);
    });
  });
  describe('Delete', () => {
    it('A função deve ser chamada uma vez', async () => {
      await userModel.delete(userIdMock);
      expect(databaseService.user.delete).toHaveBeenCalledTimes(1);
    });
  });
});
