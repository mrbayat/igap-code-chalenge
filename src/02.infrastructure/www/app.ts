import swaggerOptions from '@infra/utils/swagger/swaggerOptions';
import { IBaseApp } from '@framework/infrastructure/IBaseApp';
import ConfigManager from '@config/ConfigManager';
import express, { Application } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import compression from 'compression';
import timeout from 'connect-timeout';
import bodyParser from 'body-parser';
import routes from '@endpoints/routes';

export class App implements IBaseApp {
  private app: Application;

  constructor() {
    const configManager = new ConfigManager();
    const serverConfig = configManager.getServerConfig();

    this.app = express();
    this.app.use(timeout(serverConfig.getServerConnectionTimeout()));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(compression());
    this.app.use(express.json());

    const swaggerDocs = swaggerJSDoc(swaggerOptions);
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

    this.routes();
  }

  private routes() {
    this.app.use('/api/', routes);
  }

  public listen(port: number) {
    this.app.listen(port, () => {});
  }
}
