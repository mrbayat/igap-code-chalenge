import { Config } from './Config';
import * as path from 'path';

type STORAGE_TYPE = 'json' | 'yaml';

export class DbConfig extends Config {
  private dbStoreType: STORAGE_TYPE;
  private dbPath: string;

  private constructor() {
    super();
    this.dbStoreType =
      process.env.SDD_STORE_TYPE && ['json', 'yaml'].includes(process.env.SDD_STORE_TYPE)
        ? (process.env.SDD_STORE_TYPE as STORAGE_TYPE)
        : 'json';
    this.dbPath = path.resolve(process.cwd(), process.env.DB_PATH || 'database');
  }

  static getInstance(): DbConfig {
    return super.getInstance('db') as DbConfig;
  }

  getDbStoreType(): STORAGE_TYPE {
    return this.dbStoreType;
  }

  getDbPath(): string {
    return this.dbPath;
  }
}
