import { IBaseCommand } from '@framework/domain/application/IBaseCommand';

export class DeleteUserCommand implements IBaseCommand {
  constructor(public readonly userId: string) {}
}
