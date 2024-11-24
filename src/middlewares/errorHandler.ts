import { Request, Response } from 'express';

export const errorHandler = (
  req: Request,
  res: Response,
) => {
  res.status(500).json({
    message: 'Something went wrong',
    success: false,
    error:  'InternalServerError',
  });
};
