export class Schema<T> {
  private schemaDefinition: { [K in keyof T]: string };

  constructor(schemaDefinition: { [K in keyof T]: string }) {
    this.schemaDefinition = schemaDefinition;
  }

  validate(data: Partial<T>): void {
    for (const key in this.schemaDefinition) {
      const expectedType = this.schemaDefinition[key];
      const value = data[key];

      if (value === undefined) continue;

      const actualType = Array.isArray(value) ? 'array' : typeof value;
      if (actualType !== expectedType) {
        throw new Error(
          `Validation error: Field '${key}' is expected to be '${expectedType}', but got '${actualType}'`,
        );
      }
    }
  }
}
