import express from 'express';
import rootRouter from '../controllers/root';

const app = express();

app.use(express.json());

rootRouter(app);

export default app;
