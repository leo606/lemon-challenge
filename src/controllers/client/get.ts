import { Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import clientReport from '../../services/clientReport';

import Client from '../../interfaces/Client';
import clientValidation from '../../middlewares/clientValidation';

async function getClientEligibility(req:Request, res:Response) {
  const client:Client = req.body;

  const report = clientReport(client);

  res.status(StatusCodes.OK).json(report);
}

export default (router: Router) => {
  router.get('/', clientValidation, getClientEligibility);
};
