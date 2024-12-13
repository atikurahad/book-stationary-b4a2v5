import { Request, Response } from 'express';

const errorHandler = (_: Request, res: Response) => {
  res.status(500).json({
    message: 'Something went wrong',
    success: false,
    error: 'InternalServerError',
  });
};

export default errorHandler;
