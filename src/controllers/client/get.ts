import { Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import clientValidation from '../../middlewares/clientValidation';

async function getClientEligibility(req:Request, res:Response) {
  res.status(StatusCodes.NOT_IMPLEMENTED).end();
}

export default (router: Router) => {
  router.get('/', clientValidation, getClientEligibility);
};
