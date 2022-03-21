import { Router, Express } from 'express';
import getClientEligibility from './client/get';

const root = Router({ mergeParams: true });

getClientEligibility(root);

export default (app: Express) => {
  app.use('/', root);
};
