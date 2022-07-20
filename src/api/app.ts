import express from 'express';
import cors from 'cors';
import routes from './routes';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    this.app.get('/', (req, res) => res.send('API tekurt online'));
  }

  private config(): void {
    this.app.use(express.json());
    this.app.use(cors()); 
    this.app.use(routes);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Online na porta: ${PORT}`));
  }
}

export { App };
