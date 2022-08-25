import { Test, TestingModule } from '@nestjs/testing';
import { User } from '@prisma/client';
import { passwordDto } from '../dtos';
import { UserController } from '../user.controller';
import { UserService } from '../user.service';
import {
  newPasswordMock,
  passwordMock,
  readOneMock,
  updateDtoMock,
  updateMockWithoutPassword,
  userArrayMock,
  userIdMock,
  userKeysWithoutPassword,
  usernameMock,
} from './mocks';

describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: {
            readOne: jest.fn().mockResolvedValue(readOneMock),
            read: jest.fn().mockResolvedValue(userArrayMock),
            update: jest.fn().mockResolvedValue(updateMockWithoutPassword),
            updatePassword: jest.fn().mockResolvedValue(null),
            delete: jest.fn().mockResolvedValue(null),
          },
        },
      ],
    }).compile();
    userController = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });
  it('Deve ser definido', () => {
    expect(userController).toBeDefined();
    expect(userService).toBeDefined();
  });
  describe('Testa o método readOne', () => {
    it('Retorna um objeto de usuário, sem a senha', async () => {
      const result = await userController.readOne(usernameMock);
      expect(result).not.toHaveProperty('password');
      expect(result).toEqual(readOneMock);
      expect(Object.keys(result)).toEqual(userKeysWithoutPassword);
    });
  });
  describe('Testa o método read', () => {
    it('Retorna um array de objetos de usuários, sem a senha', async () => {
      const result = await userController.read();
      expect(result[0]).not.toHaveProperty('password');
      expect(Object.keys(result[0])).toEqual(userKeysWithoutPassword);
    });
  });
  describe('Testa o método update', () => {
    it('Retona o objeto do usuário atualizado', async () => {
      const result = await userController.update(
        { userIdMock, usernameMock } as any,
        updateDtoMock,
      );
      expect(result).not.toHaveProperty('password');
      expect(result).toEqual(updateMockWithoutPassword);
      expect(Object.keys(result)).toEqual(userKeysWithoutPassword);
    });
  });
  describe('Testa o método updatePassword', () => {
    it('Retorna null', async () => {
      const result = await userController.updatePassword(
        { id: userIdMock } as User,
        {
          password: passwordMock,
          newPassword: newPasswordMock,
        },
      );
      expect(result).toEqual(null);
    });
  });
  describe('Testa o método delete', () => {
    it('Retorna null', async () => {
      const result = await userController.delete({ id: userIdMock } as User, {
        password: passwordMock,
      });
      expect(result).toEqual(null);
    });
  });
});
