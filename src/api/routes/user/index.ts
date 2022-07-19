import { Router } from 'express';
import UserController from '../../controllers/user.controller';
import FactoryLayers from '../../factory/userLayers';

const routes = Router();
const controller = FactoryLayers.factoryUser();

routes.post('/login', controller.getByEmailOrUsername);

export default routes;