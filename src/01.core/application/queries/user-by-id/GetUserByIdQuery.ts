import { IBaseCommand } from '@framework/domain/application/IBaseCommand';

export class GetUserByIdQuery implements IBaseCommand {
  constructor(public readonly userId: string) {}
}
