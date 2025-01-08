import { GetAllUserQuery } from '@core/application/queries/get-all-users/GetAllUserQuery';
import { ICommandHandler } from '@framework/domain/application/ICommandHandler';
import { IUserUseCase } from '@core/application/interfaces/IUserUseCase';
import { UserProps } from '@core/domain/types/user.types';
import { Result } from '@framework/domain/application/Result';
import { TYPES } from '@infra/ioc/types';
import { injectable, inject } from 'inversify';

@injectable()
export class GetAllUsersHandler implements ICommandHandler<GetAllUserQuery> {
  constructor(@inject(TYPES.IUserUseCase) private userService: IUserUseCase) {}

  async handle(page: GetAllUserQuery): Promise<Result<UserProps[]>> {
    const userList = await this.userService.getAllUser(page.limit, page.page);

    return Result.success(userList);
  }
}
