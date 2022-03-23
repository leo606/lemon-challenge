import { config } from 'dotenv';
import app from './app';

config();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log('listening port', PORT));
