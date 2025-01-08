import { CreateUserCommand } from '@core/application/commands/create-user/CreateUserCommand';
import { ICommandHandler } from '@framework/domain/application/ICommandHandler';
import { IUserUseCase } from '@core/application/interfaces/IUserUseCase';
import { UserMapper } from '@core/application/mappers/UserMapper';
import { Result } from '@framework/domain/application/Result';
import { UserJson } from '@core/domain/types/user.types';
import { TYPES } from '@infra/ioc/types';
import { injectable, inject } from 'inversify';

@injectable()
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(@inject(TYPES.IUserUseCase) private userService: IUserUseCase) {}

  async handle(command: CreateUserCommand): Promise<Result<UserJson>> {
    {
      const userProps = UserMapper.mapperCommandToEntity(command);
      const user = await this.userService.createUser(userProps);

      return Result.success<UserJson>(user.toJSON());
    }
  }
}
