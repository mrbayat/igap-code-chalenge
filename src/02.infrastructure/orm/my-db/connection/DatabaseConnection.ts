import * as fs from 'fs/promises';

class DatabaseConnection {
  private static instance: DatabaseConnection;

  private constructor(private dbPath: string) {}

  public static getInstance(dbPath: string): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection(dbPath);
    }

    return DatabaseConnection.instance;
  }

  public async connect(): Promise<void> {
    try {
      await fs.mkdir(this.dbPath, { recursive: true });
    } catch (error) {
      console.log(error);
    }
  }

  public async disconnect(): Promise<void> {}
}

export default DatabaseConnection;
