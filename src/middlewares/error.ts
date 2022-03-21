import {
  Request, Response, NextFunction, Express,
} from 'express';

import ErrorResponse from '../interfaces/ErrorResponse';

async function errorHandler(err:ErrorResponse, _req:Request, res:Response, _next:NextFunction) {
  return res.status(err.code).json({ message: err.message });
}

export default (app: Express) => {
  app.use(errorHandler);
};
