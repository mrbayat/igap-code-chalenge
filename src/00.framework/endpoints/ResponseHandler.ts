import { Response } from 'express';

export class ResponseHandler {
  public static success(
    res: Response,
    data: any = null,
    message: string = 'Success',
    statusCode: number = 200,
  ): Response {
    return res.status(statusCode).json({
      status: 'success',
      message,
      data,
    });
  }

  public static error(res: Response, error: any, statusCode: number = 500): Response {
    const message = typeof error === 'string' ? error : error.message || 'Internal Server Error';
    return res.status(statusCode).json({
      status: 'error',
      message,
      data: null,
    });
  }
}
