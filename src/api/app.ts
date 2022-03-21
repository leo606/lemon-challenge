import express, { Request, Response } from 'express';
import clientSchema from '../helpers/joiSchemas';

const app = express();

app.use(express.json());

app.get('/', async (req: Request, res:Response) => {
  const client = req.body;
  console.log(clientSchema.validate(client));

  res.status(200).send('express ts');
});

export default app;
