import { Router } from 'express';
import FactoryLayers from '../../factory/loginLayers';

const routes = Router();
const controller = FactoryLayers.factoryLogin();

routes.post('/', controller.getByEmailOrUsername.bind(controller));

export default routes;