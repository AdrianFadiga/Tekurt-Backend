import { UserDto } from '../../../user/dtos';
import { AuthDto } from '../../dtos/authDto.dto';

export const loginUser = new AuthDto('usuario teste', '12345678');

export const loginModelResponse = {
  username: 'usaurio',
  email: 'teste@gmail.com',
  id: 'id_aleatorio',
  password: 'senha123',
};

export const createUser: UserDto = {
  firstName: 'usuario teste',
  lastName: 'sobrenome',
  password: '12345678',
  email: 'teste@gmail.com',
  username: 'usuario_teste',
  biography: '',
  children: true,
  drinkingId: 'id_drink',
  imageUrl: 'dadada',
  signId: 'id_sign',
  smokes: false,
  socialStatusId: 'id_socialStatus',
};
