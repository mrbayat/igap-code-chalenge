import { CreateUserHandler } from '@core/application/commands/create-user/CreateUserHandler';
import { CreateUserCommand } from '@core/application/commands/create-user/CreateUserCommand';
import { GetAllUserQuery } from '@core/application/queries/get-all-users/GetAllUserQuery';
import { GetAllUsersHandler } from '@core/application/queries/get-all-users/GetAllUsersHandler';
import { DeleteUserCommand } from '@core/application/commands/delete-user/DeleteUserCommand';
import { DeleteUserHandler } from '@core/application/commands/delete-user/DeleteUserHandler';
import { GetUserByIdHandler } from '@core/application/queries/user-by-id/GetUserByIdHandler';
import { GetUserByIdQuery } from '@core/application/queries/user-by-id/GetUserByIdQuery';
import { BaseController } from '@framework/endpoints/BaseController';
import { UserCreateDto } from '@endpoints/dtos/UserDto';
import { TYPES } from '@infra/ioc/types';
import { Request, Response } from 'express';
import { inject } from 'inversify';

export class UserController extends BaseController {
  constructor(
    @inject(TYPES.CreateUserCommand) private createUserHandler: CreateUserHandler,
    @inject(TYPES.GetAllUserQuery) private getAllUsersHandler: GetAllUsersHandler,
    @inject(TYPES.DeleteUserCommand) private deleteUserHandler: DeleteUserHandler,
    @inject(TYPES.GetUserByIdQuery) private getUserByIdHandler: GetUserByIdHandler,
  ) {
    super();
  }

  public async createUser(req: Request, res: Response): Promise<void> {
    try {
      const newUser: UserCreateDto = req.body;

      const command = new CreateUserCommand(newUser.firstName, newUser.lastName, newUser.age);

      await this.createUserHandler.handle(command);

      this.sendSuccess(res, null, 'user created successfully', 201);
    } catch (error) {
      this.sendError(res, error);
    }
  }

  public async getAllUser(req: Request, res: Response): Promise<void> {
    try {
      const query: GetAllUserQuery = req.query;

      const users = await this.getAllUsersHandler.handle(query);

      this.sendSuccess(res, users.value, 'ok', 200);
    } catch (error) {
      this.sendError(res, error);
    }
  }

  public async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.params.id;
      const command = new DeleteUserCommand(userId);

      await this.deleteUserHandler.handle(command);

      this.sendSuccess(res, null, 'user deleted successfully', 200);
    } catch (error) {
      this.sendError(res, error, 404);
    }
  }

  public async userById(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.params.id;
      const query = new GetUserByIdQuery(userId);

      const user = await this.getUserByIdHandler.handle(query);

      this.sendSuccess(res, user.value, 'ok!', 200);
    } catch (error) {
      this.sendError(res, error, 404);
    }
  }
}
