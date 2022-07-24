import { Router } from 'express';
import { BuildLayers } from '../../builder/loginLayers';
import { validateLogin } from '../../middlewares/loginValidate';

const routes = Router();
const controller = BuildLayers.factoryLogin();

routes.post('/', validateLogin, controller.sigIn.bind(controller));

export default routes;