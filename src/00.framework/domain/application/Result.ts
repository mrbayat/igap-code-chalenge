export class Result<T> {
  private constructor(
    public isSuccess: boolean,
    public error?: string,
    public value?: T,
  ) {}

  static success<T>(value: T): Result<T> {
    return new Result<T>(true, '', value);
  }

  static failure<T>(error: string): Result<T> {
    return new Result<T>(false, error);
  }

  getValue(): T {
    if (!this.isSuccess) {
      throw new Error('Cannot get the value of a failed result');
    }
    return this.value!;
  }
}
