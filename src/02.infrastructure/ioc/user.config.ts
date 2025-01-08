import { TYPES } from '@infra/ioc/types';
import { ContainerModule, interfaces } from 'inversify';
import { IUserRepository } from '@core/domain/repositories/IUserRepository';
import { MyDbUserRepository } from '@infra/repositories/my-db/MyDbUserRepository';
import { CreateUserHandler } from '@core/application/commands/create-user/CreateUserHandler';
import { IUserUseCase } from '@core/application/interfaces/IUserUseCase';
import { UserUseCase } from '@core/application/use-case/UserUseCase';
import { UserController } from '@endpoints/controllers/UserController';
import { GetAllUsersHandler } from '@core/application/queries/get-all-users/GetAllUsersHandler';
import { DeleteUserHandler } from '@core/application/commands/delete-user/DeleteUserHandler';
import { GetUserByIdHandler } from '@core/application/queries/user-by-id/GetUserByIdHandler';

export const userModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<IUserRepository>(TYPES.IUserRepository).to(MyDbUserRepository);
  bind<CreateUserHandler>(TYPES.CreateUserCommand).to(CreateUserHandler);
  bind<IUserUseCase>(TYPES.IUserUseCase).to(UserUseCase);
  bind<UserController>(TYPES.UserController).to(UserController);
  bind<GetAllUsersHandler>(TYPES.GetAllUserQuery).to(GetAllUsersHandler);
  bind<DeleteUserHandler>(TYPES.DeleteUserCommand).to(DeleteUserHandler);
  bind<GetUserByIdHandler>(TYPES.GetUserByIdQuery).to(GetUserByIdHandler);
});
