import { Config } from './Config';

export class ServerConfig extends Config {
  private serverPort: number;
  private serverConnectionTimeout: string;

  private constructor() {
    super();
    this.serverPort = parseInt(process.env.SERVER_PORT || '4000', 10);
    this.serverConnectionTimeout = process.env.SERVER_CONNECTION_TIMEOUT || '20s';
  }

  static getInstance(): ServerConfig {
    return super.getInstance('server') as ServerConfig;
  }

  getServerPort(): number {
    return this.serverPort;
  }

  getServerConnectionTimeout(): string {
    return this.serverConnectionTimeout;
  }
}
