import { validate as uuidValidate, v7 as uuidv7 } from 'uuid';

export abstract class EntityId<T extends string = string> {
  private readonly value: T;

  protected constructor(value: T) {
    if (!value || !this.isValid(value)) {
      throw new Error(`Invalid ID value: ${value}`);
    }

    this.value = value;
  }

  static create<T extends string>(factory?: () => T): EntityId<T> {
    const id = factory ? factory() : (uuidv7() as T);

    return new (this as any)(id);
  }

  static from<T extends string>(value: T): EntityId<T> {
    return new (this as any)(value);
  }

  protected isValid(value: T): boolean {
    return uuidValidate(value);
  }

  getValue(): T {
    return this.value;
  }

  equals(other: EntityId<T>): boolean {
    return other instanceof EntityId && this.value === other.value;
  }

  toString(): string {
    return this.value.toString();
  }
}
