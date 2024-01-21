import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import { connectDB } from './db.js';
import { createUser } from './controllers/userController.js';

const app = express();
const PORT = 3000;

mongoose.set('debug', true);

app.use(express.json());
app.use(cors());
app.use(helmet());

app.get('/', (req, res) => {
  res.send('This is a get');
});

app.post('/users', createUser);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Something broke!');
});

app.listen(PORT, async () => {
  console.log('This is my express app');
  await connectDB();
});
