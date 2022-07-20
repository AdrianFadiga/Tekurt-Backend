import { Router } from 'express';
import loginRoutes from './login';

const routes = Router();

routes.use('/login', loginRoutes);

export default routes;

