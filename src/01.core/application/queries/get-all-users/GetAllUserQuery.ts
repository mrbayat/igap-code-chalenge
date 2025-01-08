import { IBaseCommand } from '@framework/domain/application/IBaseCommand';

export class GetAllUserQuery implements IBaseCommand {
  constructor(
    public readonly limit?: number,
    public readonly page?: number,
  ) {}
}
