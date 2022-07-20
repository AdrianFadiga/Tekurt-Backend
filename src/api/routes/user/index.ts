import { Router } from 'express';
import FactoryLayers from '../../factory/userLayers';

const routes = Router();
const controller = FactoryLayers.factoryUser();

routes.post('/login', controller.getByEmailOrUsername.bind(controller));

export default routes;