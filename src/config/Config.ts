import dotenv from 'dotenv';

dotenv.config();

export class Config {
  private static instances: Map<string, Config> = new Map();

  protected constructor() {}

  static getInstance(configType: string): Config {
    if (!this.instances.has(configType)) {
      const instance = new this();
      this.instances.set(configType, instance);
    }
    return this.instances.get(configType)!;
  }

  loadConfig(): void {}
}
