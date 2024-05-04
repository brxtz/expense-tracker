import express, { Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env['MONGO_DB_URL'] as string)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('Failed to connect to MongoDB', err));

app.get('/api/data', (req: Request, res: Response) => {
  res.status(200).json({ message: "Data fetched successfully from the API" });
});

export default app;
