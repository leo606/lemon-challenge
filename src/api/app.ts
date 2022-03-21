import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

app.get('/', async (req: Request, res:Response) => {
  res.status(200).send('express ts');
});

export default app;
