import { Response, Request, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

import Client from '../interfaces/Client';
import clientSchema from '../helpers/joiSchemas';

async function clientValidation(req:Request, res:Response, next:NextFunction) {
  const client:Client = req.body;
  const clientValid = clientSchema.validate(client);

  if (clientValid.error) {
    return next({ code: StatusCodes.BAD_REQUEST, message: clientValid.error.message });
  }

  return next();
}

export default clientValidation;
