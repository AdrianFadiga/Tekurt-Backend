import { Router } from 'express';
import { BuildLayers } from '../../builder/loginLayers';

const routes = Router();
const controller = BuildLayers.factoryLogin();

routes.post('/', controller.getByEmailOrUsername.bind(controller));

export default routes;