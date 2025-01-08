import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { Schema } from '../schema/Schema';
import ConfigManager from '@config/ConfigManager';

type STORAGE_TYPE = 'json' | 'yaml';

export interface BaseRecord {
  id: string;
}

export interface ICollection<T> {
  save(record: Omit<T, 'id'>): T;
  findOne(id: string): T;
  updateOne(id: string, updates: Partial<Omit<T, 'id'>>): T | null;
  deleteOne(id: string): boolean;
  find(query: Partial<T>): T[];
}

export class Collection<T extends BaseRecord> implements ICollection<T> {
  private filePath: string;
  private format: STORAGE_TYPE;
  private data: T[];
  private schema: Schema<T>;

  constructor(collectionName: string, schema: Schema<T>) {
    const configManager = new ConfigManager();
    const dbConfig = configManager.getDbConfig();
    const dbPath = dbConfig.getDbPath();
    const dbStoreType = dbConfig.getDbStoreType();

    this.format = dbStoreType;
    this.filePath = path.join(dbPath, `${collectionName}.${this.format}`);
    this.schema = schema;
    this.data = [];

    this.loadData();
  }

  private loadData(): void {
    if (fs.existsSync(this.filePath)) {
      const fileContent = fs.readFileSync(this.filePath);

      switch (this.format) {
        case 'json':
          this.data = JSON.parse(fileContent.toString()) as T[];
          break;
        case 'yaml':
          this.data = yaml.load(fileContent.toString()) as T[];
          break;
      }
    } else {
      this.saveData();
    }
  }

  private saveData(): void {
    let content: Buffer | string;

    switch (this.format) {
      case 'json':
        content = JSON.stringify(this.data, null, 2);
        fs.writeFileSync(this.filePath, content);
        break;
      case 'yaml':
        content = yaml.dump(this.data);
        fs.writeFileSync(this.filePath, content);
        break;
    }
  }

  save(record: T): T {
    this.schema.validate(record);
    this.data.push(record);
    this.saveData();
    return record;
  }

  findOne(id: string): T {
    const record = this.data.find((record) => record.id === id);
    if (!record) {
      throw new Error('record not found');
    }
    return record;
  }

  updateOne(id: string, updates: Partial<Omit<T, 'id'>>): T | null {
    const record = this.findOne(id);
    if (!record) return null;

    const updatedRecord = { ...record, ...updates };
    this.schema.validate(updatedRecord);

    const idx = this.data.findIndex((r) => r.id === id);
    this.data[idx] = updatedRecord;
    this.saveData();
    return updatedRecord;
  }

  deleteOne(id: string): boolean {
    const idx = this.data.findIndex((record) => record.id === id);
    if (idx === -1) throw new Error('record not found');

    this.data.splice(idx, 1);
    this.saveData();
    return true;
  }

  find(query: Partial<T>, limit: number = 10, page: number = 1): T[] {
    const filteredData = this.data.filter((record) =>
      Object.entries(query).every(([key, value]) => record[key as keyof T] === value),
    );

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    return filteredData.slice(startIndex, endIndex);
  }
}
