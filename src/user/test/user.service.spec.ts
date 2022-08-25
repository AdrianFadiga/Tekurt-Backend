import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { UserModel } from '../user.model';
import { UserService } from '../user.service';
import {
  conflict,
  findByIdMock,
  findManyMock,
  findUniqueMock,
  invalidPasswordMock,
  newPasswordMock,
  notFound,
  passwordMock,
  readOneMock,
  unauthorized,
  updateDtoMock,
  updateMock,
  userIdMock,
  userKeysWithoutPassword,
  usernameInUseMock,
  usernameMock,
} from './mocks';
import { UpdateUserDto } from '../dtos';

describe('User Service', () => {
  describe('Em caso de sucesso', () => {
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
    describe('Read', () => {
      it('Deve retornar um Array de objetos de usuário, sem a chave password', async () => {
        const result = await userService.read();
        expect(result[0]).not.toHaveProperty('password');
        expect(Object.keys(result[0])).toEqual(userKeysWithoutPassword);
      });
    });
    describe('readOne', () => {
      it('Deve retornar um objeto de usuário, sem a chave password', async () => {
        const result = await userService.readOne(usernameMock);
        expect(result).not.toHaveProperty('password');
        expect(result).toEqual(readOneMock);
        expect(Object.keys(result)).toEqual(userKeysWithoutPassword);
      });
    });
    describe('findById', () => {
      it('Deve retornar um objeto de usuário, sem a chave password', async () => {
        const result = await userService.findById(userIdMock);
        expect(result).not.toHaveProperty('password');
        expect(result).toEqual(readOneMock);
        expect(Object.keys(result)).toEqual(userKeysWithoutPassword);
      });
    });
    describe('update', () => {
      it('Deve retornar um objeto de usuário, sem a chave password', async () => {
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
    });
    describe('updatePassword', () => {
      it('deve retornar undefined', async () => {
        jest.spyOn(bcrypt, 'compare').mockResolvedValueOnce(true);
        const result = await userService.updatePassword(
          userIdMock,
          passwordMock,
          newPasswordMock,
        );
        expect(result).toEqual(undefined);
      });
    });
    describe('delete', () => {
      it('deve retornar undefined', async () => {
        jest.spyOn(bcrypt, 'compare').mockResolvedValueOnce(true);
        const result = await userService.delete(userIdMock, passwordMock);
        expect(result).toEqual(undefined);
      });
    });
  });

  describe('Em caso de falha', () => {
    let userService: UserService;
    let userModel: UserModel;

    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        providers: [
          UserService,
          {
            provide: UserModel,
            useValue: {
              read: jest.fn().mockResolvedValue(null),
              readOne: jest.fn().mockResolvedValue(null),
              findById: jest.fn().mockResolvedValue(null),
            },
          },
          JwtService,
          ConfigService,
        ],
      }).compile();
      userService = module.get<UserService>(UserService);
      userModel = module.get<UserModel>(UserModel);
    });
    describe('readOne', () => {
      it('Deve lançar o erro not found', async () => {
        try {
          await userService.readOne(userIdMock);
        } catch (err) {
          expect(err.response).toEqual(notFound);
        }
      });
    });
    describe('findById', () => {
      it('Deve lançar o erro not found', async () => {
        try {
          await userService.findById(userIdMock);
        } catch (err) {
          expect(err.response).toEqual(notFound);
        }
      });
    });
    describe('update', () => {
      it('Deve lançar o erro conflict', async () => {
        jest
          .spyOn(userModel, 'readOne')
          .mockResolvedValueOnce(findUniqueMock as any);
        try {
          await userService.update(
            userIdMock,
            usernameMock,
            usernameInUseMock as UpdateUserDto,
          );
        } catch (err) {
          expect(err.response).toEqual(conflict);
        }
      });
    });
    describe('updatePassword', () => {
      it('Deve lançar o erro unauthorized', async () => {
        jest.spyOn(bcrypt, 'compare').mockResolvedValueOnce(false);
        jest
          .spyOn(userModel, 'findById')
          .mockResolvedValueOnce({ password: invalidPasswordMock } as any);
        try {
          await userService.updatePassword(
            userIdMock,
            invalidPasswordMock,
            newPasswordMock,
          );
        } catch (err) {
          expect(err.response).toEqual(unauthorized);
        }
      });
    });
    describe('delete', () => {
      it('Deve lançar o erro unauthorized', async () => {
        jest.spyOn(bcrypt, 'compare').mockResolvedValueOnce(false);
        jest
          .spyOn(userModel, 'findById')
          .mockResolvedValueOnce({ password: invalidPasswordMock } as any);
        try {
          await userService.updatePassword(
            userIdMock,
            invalidPasswordMock,
            newPasswordMock,
          );
        } catch (err) {
          expect(err.response).toEqual(unauthorized);
        }
      });
    });
  });
});
