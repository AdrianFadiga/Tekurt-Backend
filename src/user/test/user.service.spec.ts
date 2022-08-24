import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { UserModel } from '../user.model';
import { UserService } from '../user.service';
import {
  findByIdMock,
  findManyMock,
  passwordMock,
  readOneMock,
  updateDtoMock,
  updateMock,
  userIdMock,
  userKeysWithoutPassword,
  usernameMock,
} from './mocks';

describe('User Service', () => {
  let userService: UserService;
  let userModel: UserModel;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: UserModel,
          useValue: {
            read: jest.fn().mockResolvedValue(findManyMock),
            readOne: jest.fn().mockResolvedValue(findByIdMock),
            findById: jest.fn().mockResolvedValue(findByIdMock),
            update: jest.fn().mockResolvedValue(updateMock),
            updatePassword: jest.fn().mockResolvedValue(findByIdMock),
            delete: jest.fn().mockResolvedValue(findByIdMock),
          },
        },
        JwtService,
        ConfigService,
      ],
    }).compile();

    userService = module.get<UserService>(UserService);
    userModel = module.get<UserModel>(UserModel);
  });
  it('Deve ser definido', () => {
    expect(userService).toBeDefined();
    expect(userModel).toBeDefined();
  });

  describe('Em caso de sucesso', () => {
    it('Read', async () => {
      const result = await userService.read();
      expect(result[0]).not.toHaveProperty('password');
      expect(Object.keys(result[0])).toEqual(userKeysWithoutPassword);
    });
    it('ReadOne', async () => {
      const result = await userService.readOne(usernameMock);
      expect(result).not.toHaveProperty('password');
      expect(result).toEqual(readOneMock);
      expect(Object.keys(result)).toEqual(userKeysWithoutPassword);
    });
    it('findById', async () => {
      const result = await userService.findById(userIdMock);
      expect(result).not.toHaveProperty('password');
      expect(result).toEqual(readOneMock);
      expect(Object.keys(result)).toEqual(userKeysWithoutPassword);
    });
    it('update', async () => {
      jest.spyOn(userModel, 'readOne').mockResolvedValueOnce(null);
      const result = await userService.update(
        userIdMock,
        passwordMock,
        updateDtoMock,
      );
      expect(result).toEqual(updateMock);
      expect(result).not.toHaveProperty('password');
      expect(Object.keys(result)).toEqual(userKeysWithoutPassword);
    });
    it('updatePassword', async () => {
      const result = await userService.updatePassword(userIdMock, passwordMock);
      expect(result).toEqual(undefined);
    });
    it('delete', async () => {
      jest.spyOn(bcrypt, 'compare').mockResolvedValueOnce(true);
      const result = await userService.delete(userIdMock, passwordMock);
      expect(result).toEqual(undefined);
    });
  });
});
