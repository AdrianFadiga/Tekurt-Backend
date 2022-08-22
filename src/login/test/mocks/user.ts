import { User } from '@prisma/client';
import { SignUpDto } from '../../dtos';
import { AuthDto } from '../../dtos/authDto.dto';

export const loginUser = new AuthDto('usuario teste', '12345678');

export const loginModelResponse = {
  username: 'usuario',
  email: 'teste@gmail.com',
  id: 'id_aleatorio',
  password: 'senha123',
};

export const createUser: SignUpDto = {
  firstName: 'usuario teste',
  lastName: 'sobrenome',
  password: '12345678',
  email: 'teste@gmail.com',
  username: 'usuario_teste',
};

export const createdUser: User = {
  id: '0dbabbc5-fd0a-48c1-8272-1bd24816aa9e',
  firstName: 'usuario teste',
  lastName: 'sobrenome',
  username: 'testeola',
  email: 'teste@gmail.com',
  password: '$2b$10$P/GcIOV14oPO5QwCDV2xgePiagTlvsyu2ollZu0GV8QKetZft8l/q',
  imageUrl: null,
  socialStatusId: null,
  children: null,
  smokes: null,
  drinkingId: null,
  signId: null,
  biography: null,
  active: true,
  createdAt: new Date(),
  updatedAt: new Date(),
};
