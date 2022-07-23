import 'express-async-errors';
import { App } from './app';
import 'dotenv/config';

const PORT = process.env.PORT as string | number;

new App().start(PORT);