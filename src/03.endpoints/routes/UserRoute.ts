import { UserController } from '@endpoints/controllers/UserController';
import { IBaseRoute } from '@framework/endpoints/IBaseRoute';
import { TYPES } from '@infra/ioc/types';
import { inject, injectable } from 'inversify';
import { Router } from 'express';

@injectable()
export class UserRoute implements IBaseRoute {
  private readonly router: Router;

  constructor(@inject(TYPES.UserController) private userController: UserController) {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post('/', (req, res) => this.userController.createUser(req, res));
    this.router.get('/', (req, res) => this.userController.getAllUser(req, res));
    this.router.delete('/:id', (req, res) => this.userController.deleteUser(req, res));
    this.router.get('/:id', (req, res) => this.userController.userById(req, res));
  }

  public getRouter(): Router {
    return this.router;
  }
}
