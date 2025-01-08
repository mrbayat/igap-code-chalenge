import { DbConfig } from './DbConfig';
import { ServerConfig } from './ServerConfig';

class ConfigManager {
  private dbConfig: DbConfig;
  private serverConfig: ServerConfig;

  constructor() {
    this.dbConfig = DbConfig.getInstance();
    this.serverConfig = ServerConfig.getInstance();
  }

  getDbConfig(): DbConfig {
    return this.dbConfig;
  }

  getServerConfig(): ServerConfig {
    return this.serverConfig;
  }
}

export default ConfigManager;
