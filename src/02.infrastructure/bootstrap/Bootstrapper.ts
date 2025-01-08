import ConfigManager from '@config/ConfigManager';
import { Server } from '@infra/www/server';
import 'reflect-metadata';
import DatabaseConnection from '@infra/orm/my-db/connection/DatabaseConnection';

export class Bootstrapper {
  public async initialize(): Promise<void> {
    try {
      const configManager = new ConfigManager();
      const serverConfig = configManager.getServerConfig();
      const dbConfig = configManager.getDbConfig();
      const serverPort = serverConfig.getServerPort();
      const dbPath = dbConfig.getDbPath();
      this.initializeDatabase(dbPath);

      this.startServer(serverPort);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }

  private initializeDatabase(dbPath: string) {
    const db = DatabaseConnection.getInstance(dbPath);
    db.connect();
  }

  private startServer(serverPort: number): void {
    const server = new Server(serverPort);
    server.start();
  }
}
