import { ResponseHandler } from '@framework/endpoints/ResponseHandler';
import { Response } from 'express';

export abstract class BaseController {
  protected sendSuccess(
    res: Response,
    data: unknown,
    message: string = 'Success',
    statusCode: number = 200,
  ): Response {
    return ResponseHandler.success(res, data, message, statusCode);
  }

  protected sendError(res: Response, error: unknown, statusCode: number = 500): Response {
    return ResponseHandler.error(res, error, statusCode);
  }
}
