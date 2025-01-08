import { UserController } from '@endpoints/controllers/UserController';
import container from '@infra/ioc/container';
import { TYPES } from '@infra/ioc/types';
import { Router } from 'express';

import { UserRoute } from './UserRoute';

const mainRouter = Router();
const userController = container.get<UserController>(TYPES.UserController);

const userRoute = new UserRoute(userController);

mainRouter.use('/v1/users', userRoute.getRouter());

export default mainRouter;
