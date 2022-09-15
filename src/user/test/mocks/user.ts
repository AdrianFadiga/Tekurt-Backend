import { UpdateUserDto } from 'src/user/dtos';

export const findManyMock = [
  {
    id: '2bb6e92a-3c2b-4b7f-a822-96f5106d8c37',
    firstName: 'nome',
    lastName: 'sobrenome',
    username: 'usuario',
    email: 'teste@teste.com',
    password: '$2b$08$YqzWMbcBWAJwwm/djC2njelPHJxzDtb9d17rUfQFUxoKVoOmrTMkC',
    imageUrl: 'url_imagem',
    socialStatusId: null,
    children: null,
    smokes: null,
    drinkingId: null,
    signId: null,
    biography: 'biografia',
    active: true,
    createdAt: '2022-08-24T15:53:12.943Z',
    updatedAt: '2022-08-24T15:53:12.943Z',
  },
  {
    id: '9f3e5473-a11e-4e6c-8dee-7235f72840ff',
    firstName: 'João',
    lastName: 'Da Silva',
    username: 'JoaoDaSilva_Sk8',
    email: 'joaodasilva@email.com',
    password: '$2b$08$YqzWMbcBWAJwwm/djC2njelPHJxzDtb9d17rUfQFUxoKVoOmrTMkC',
    imageUrl: null,
    socialStatusId: null,
    children: null,
    smokes: null,
    drinkingId: null,
    signId: null,
    biography: null,
    active: true,
    createdAt: '2022-08-24T02:06:49.317Z',
    updatedAt: '2022-08-24T02:06:49.317Z',
  },
];

export const findUniqueMock = {
  id: '2bb6e92a-3c2b-4b7f-a822-96f5106d8c37',
  firstName: 'nome',
  lastName: 'sobrenome',
  username: 'usuario',
  email: 'teste@teste.com',
  password: '$2b$08$YqzWMbcBWAJwwm/djC2njelPHJxzDtb9d17rUfQFUxoKVoOmrTMkC',
  imageUrl: 'url_imagem',
  socialStatusId: null,
  children: null,
  smokes: null,
  drinkingId: null,
  signId: null,
  biography: 'biografia',
  active: true,
  createdAt: '2022-08-24T00:56:05.524Z',
  updatedAt: '2022-08-24T00:56:05.524Z',
};

export const findByIdMock = {
  id: '2bb6e92a-3c2b-4b7f-a822-96f5106d8c37',
  firstName: 'nome',
  lastName: 'sobrenome',
  username: 'usuario',
  email: 'teste@teste.com',
  password: '$2b$08$YqzWMbcBWAJwwm/djC2njelPHJxzDtb9d17rUfQFUxoKVoOmrTMkC',
  imageUrl: 'url_imagem',
  socialStatusId: null,
  children: null,
  smokes: null,
  drinkingId: null,
  signId: null,
  biography: 'biografia',
  active: true,
  createdAt: '2022-08-24T00:56:05.524Z',
  updatedAt: '2022-08-24T00:56:05.524Z',
};

export const userKeys = [
  'id',
  'firstName',
  'lastName',
  'username',
  'email',
  'password',
  'imageUrl',
  'socialStatusId',
  'children',
  'smokes',
  'drinkingId',
  'signId',
  'biography',
  'active',
  'createdAt',
  'updatedAt',
];

export const userKeysWithoutPassword = [
  'id',
  'firstName',
  'lastName',
  'username',
  'email',
  'imageUrl',
  'socialStatusId',
  'children',
  'smokes',
  'drinkingId',
  'signId',
  'biography',
  'active',
  'createdAt',
  'updatedAt',
];

export const updateDtoMock: UpdateUserDto = {
  firstName: 'João',
  lastName: 'Da Silva',
  username: 'JoaoDaSilva_Sk8',
  socialStatusId: null,
  children: true,
  smokes: false,
  drinkingId: null,
  signId: null,
  biography: 'Biografia que o usuário deseja colocar no perfil',
};

export const updateMock = {
  id: '2bb6e92a-3c2b-4b7f-a822-96f5106d8c37',
  firstName: 'João',
  lastName: 'Da Silva',
  username: 'JoaoDaSilva_Sk8',
  email: 'joaodasilva@email.com',
  password: '$2b$08$YqzWMbcBWAJwwm/djC2njelPHJxzDtb9d17rUfQFUxoKVoOmrTMkC',
  imageUrl:
    'https://i.pinimg.com/736x/34/a1/a8/34a1a8ccc9603e62ce305fbc7e8bb1ea.jpg',
  socialStatusId: null,
  children: true,
  smokes: false,
  drinkingId: null,
  signId: null,
  biography: 'Biografia que o usuário deseja colocar no perfil',
  active: true,
  createdAt: '2022-08-24T15:53:12.943Z',
  updatedAt: '2022-08-24T15:53:12.943Z',
};

export const updateMockWithoutPassword = {
  id: '2bb6e92a-3c2b-4b7f-a822-96f5106d8c37',
  firstName: 'João',
  lastName: 'Da Silva',
  username: 'JoaoDaSilva_Sk8',
  email: 'joaodasilva@email.com',
  imageUrl:
    'https://i.pinimg.com/736x/34/a1/a8/34a1a8ccc9603e62ce305fbc7e8bb1ea.jpg',
  socialStatusId: null,
  children: true,
  smokes: false,
  drinkingId: null,
  signId: null,
  biography: 'Biografia que o usuário deseja colocar no perfil',
  active: true,
  createdAt: '2022-08-24T15:53:12.943Z',
  updatedAt: '2022-08-24T15:53:12.943Z',
};

export const idPasswordMock = '2bb6e92a-3c2b-4b7f-a822-96f5106d8c37';
export const passwordMock = '123456';

export const updatePasswordMock = {
  id: '2bb6e92a-3c2b-4b7f-a822-96f5106d8c37',
  firstName: 'João',
  lastName: 'Da Silva',
  username: 'JoaoDaSilva_Sk8',
  email: 'joaodasilva@email.com',
  password: '$2b$08$YqzWMbcBWAJwwm/djC2njelPHJxzDtb9d17rUfQFUxoKVoOmrTMkC',
  imageUrl:
    'https://i.pinimg.com/736x/34/a1/a8/34a1a8ccc9603e62ce305fbc7e8bb1ea.jpg',
  socialStatusId: null,
  children: true,
  smokes: false,
  drinkingId: null,
  signId: null,
  biography: 'Biografia que o usuário deseja colocar no perfil',
  active: true,
  createdAt: '2022-08-24T15:53:12.943Z',
  updatedAt: '2022-08-24T15:53:12.943Z',
};

export const deleteMock = {
  id: '2bb6e92a-3c2b-4b7f-a822-96f5106d8c37',
  firstName: 'nome',
  lastName: 'sobrenome',
  username: 'usuario',
  email: 'teste@teste.com',
  password: '$2b$08$YqzWMbcBWAJwwm/djC2njelPHJxzDtb9d17rUfQFUxoKVoOmrTMkC',
  imageUrl: 'url_imagem',
  socialStatusId: null,
  children: null,
  smokes: null,
  drinkingId: null,
  signId: null,
  biography: 'biografia',
  active: true,
  createdAt: '2022-08-24T00:56:05.524Z',
  updatedAt: '2022-08-24T00:56:05.524Z',
};

export const usernameMock = 'usuario';

export const userIdMock = '2bb6e92a-3c2b-4b7f-a822-96f5106d8c37';

export const readOneMock = {
  id: '2bb6e92a-3c2b-4b7f-a822-96f5106d8c37',
  firstName: 'nome',
  lastName: 'sobrenome',
  username: 'usuario',
  email: 'teste@teste.com',
  imageUrl: 'url_imagem',
  socialStatusId: null,
  children: null,
  smokes: null,
  drinkingId: null,
  signId: null,
  biography: 'biografia',
  active: true,
  createdAt: '2022-08-24T00:56:05.524Z',
  updatedAt: '2022-08-24T00:56:05.524Z',
};

export const usernameInUseMock = {
  username: 'username já cadastrado',
};

export const invalidPasswordMock = 'senhaInvalida';

export const newPasswordMock = 'novaSenha';

export const userArrayMock = [
  {
    id: '2bb6e92a-3c2b-4b7f-a822-96f5106d8c37',
    firstName: 'nome',
    lastName: 'sobrenome',
    username: 'usuario',
    email: 'teste@teste.com',
    imageUrl: 'url_imagem',
    socialStatusId: null,
    children: null,
    smokes: null,
    drinkingId: null,
    signId: null,
    biography: 'biografia',
    active: true,
    createdAt: '2022-08-24T19:19:59.572Z',
    updatedAt: '2022-08-24T19:19:59.572Z',
  },
  {
    id: '2bb6e92a-3c2b-4b7f-a822-96f5106d8c37',
    firstName: 'nome',
    lastName: 'sobrenome',
    username: 'usuario',
    email: 'teste@teste.com',
    imageUrl: 'url_imagem',
    socialStatusId: null,
    children: null,
    smokes: null,
    drinkingId: null,
    signId: null,
    biography: 'biografia',
    active: true,
    createdAt: '2022-08-24T19:19:59.572Z',
    updatedAt: '2022-08-24T19:19:59.572Z',
  },
];
