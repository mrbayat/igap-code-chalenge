import { GetUserByIdQuery } from '@core/application/queries/user-by-id/GetUserByIdQuery';
import { ICommandHandler } from '@framework/domain/application/ICommandHandler';
import { IUserUseCase } from '@core/application/interfaces/IUserUseCase';
import { Result } from '@framework/domain/application/Result';
import { UserProps } from '@core/domain/types/user.types';
import { TYPES } from '@infra/ioc/types';
import { injectable, inject } from 'inversify';

@injectable()
export class GetUserByIdHandler implements ICommandHandler<GetUserByIdQuery> {
  constructor(@inject(TYPES.IUserUseCase) private userService: IUserUseCase) {}

  async handle(query: GetUserByIdQuery): Promise<Result<UserProps>> {
    {
      const user = await this.userService.userById(query.userId);

      return Result.success<UserProps>(user);
    }
  }
}
