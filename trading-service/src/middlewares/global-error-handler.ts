import { Request, Response, NextFunction } from 'express';

import { ErrorHandler } from '../utils/errors';

export function handleErrors (err: ErrorHandler, req: Request, res: Response, next: NextFunction) {
  const { code, message } = err;

  return res.status(code && typeof code === 'number' ? code : 500).json({
    status: code,
    message
  });
};

export const asyncHandler = (fn:(req: Request, res: Response, next: NextFunction) => void) => (req: Request, res: Response, next: NextFunction) => {
  return Promise
    .resolve(fn(req, res, next))
    .catch(next);
};
