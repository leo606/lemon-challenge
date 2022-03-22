import {
  Request, Response, Router, NextFunction,
} from 'express';
import { StatusCodes } from 'http-status-codes';
import clientReport from '../../services/client/clientReport';

import Client from '../../interfaces/Client';
import clientValidation from '../../middlewares/clientValidation';

async function getClientEligibility(req:Request, res:Response, next: NextFunction) {
  try {
    const client:Client = req.body;
    const report = clientReport(client);
    res.status(StatusCodes.OK).json(report);
  } catch (error) {
    next({ code: StatusCodes.INTERNAL_SERVER_ERROR, message: 'internal server error' });
  }
}

export default (router: Router) => {
  router.get('/', clientValidation, getClientEligibility);
};
