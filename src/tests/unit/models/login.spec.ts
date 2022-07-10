import LoginModel from '../../../api/models/login.model'

describe('Testa a model de Login', () => {
  it('Verifica se a model existe', () => {
    expect(typeof LoginModel).toBe('function')
  });
});
