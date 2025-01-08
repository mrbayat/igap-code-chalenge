import { DeleteUserCommand } from '@core/application/commands/delete-user/DeleteUserCommand';
import { ICommandHandler } from '@framework/domain/application/ICommandHandler';
import { IUserUseCase } from '@core/application/interfaces/IUserUseCase';
import { TYPES } from '@infra/ioc/types';
import { injectable, inject } from 'inversify';

@injectable()
export class DeleteUserHandler implements ICommandHandler<DeleteUserCommand> {
  constructor(@inject(TYPES.IUserUseCase) private userService: IUserUseCase) {}

  async handle(command: DeleteUserCommand): Promise<void> {
    {
      await this.userService.deleteUser(command.userId);
    }
  }
}
