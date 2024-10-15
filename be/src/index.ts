import express, { Application, Request, Response, NextFunction } from 'express';
import productRouter from './routers/productRouter';
import './configs/database';
import cors from 'cors';

const app: Application = express();

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 8000;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('API is running...');
});

app.use('/api', productRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.message);
  res.status(500).json({
    message: 'Internal Server Error',
    error: NODE_ENV === 'development' ? err.message : 'Something went wrong!',
  });
});

app.listen(PORT, () => {
  console.log(`Server is running in ${NODE_ENV} mode on port ${PORT}`);
});
