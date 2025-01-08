import { IBaseCommand } from '@framework/domain/application/IBaseCommand';

export class CreateUserCommand implements IBaseCommand {
  constructor(
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly age: number,
  ) {}
}
