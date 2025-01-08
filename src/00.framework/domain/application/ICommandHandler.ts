import { IBaseCommand } from './IBaseCommand';

export interface ICommandHandler<T extends IBaseCommand> {
  handle(command: T): Promise<void | unknown>;
}
