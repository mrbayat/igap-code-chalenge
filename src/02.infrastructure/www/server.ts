import { App } from '@infra/www/app';
import cluster from 'cluster';

export class Server {
  constructor(private serverPort: number) {}

  public start() {
    if (cluster.isPrimary) {
      const numCPUs = 1; // os.cpus().length

      for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
      }

      cluster.on('exit', () => {
        cluster.fork();
      });
    } else {
      const app = new App();
      app.listen(this.serverPort);
    }
  }
}
