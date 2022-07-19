import UserController from '../controllers/user.controller';
import UserService from '../services/user.service';
import UserRepository from '../repositories/user.repository';
import UserModel from '../models/user.model';

export default class FactoryLayers {
  static factoryUser() {
    const model = new UserModel();
    const repository = new UserRepository(model);
    const service = new UserService(repository);
    const controller = new UserController(service);

    return controller;
  }
}