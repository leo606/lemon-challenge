import express from 'express';
import rootRouter from '../controllers/root';
import errorHandler from '../middlewares/error';

const app = express();

app.use(express.json());

rootRouter(app);
errorHandler(app);

export default app;
