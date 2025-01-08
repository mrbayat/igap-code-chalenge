import { Router } from 'express';

export interface IBaseRoute {
  getRouter(): Router;
}
