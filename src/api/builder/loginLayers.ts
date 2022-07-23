import LoginController from '../controllers/login.controller';
import LoginService from '../services/login.service';
import LoginRepository from '../repositories/login.repository';
import LoginModel from '../models/login.model';

export class BuildLayers {
  static factoryLogin() {
    const model = new LoginModel();
    const repository = new LoginRepository(model);
    const service = new LoginService(repository);
    const controller = new LoginController(service);

    return controller;
  }
}