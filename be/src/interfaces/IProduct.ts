import { Document } from 'mongoose';
import { IPrice } from './IPrice';

export interface IProduct extends Document {
  image: string;
  code: string;
  name: string;
  color: string;
  capacity: number;
  dimensions: string;
  features: string[];
  energyClass: string;
  price: IPrice;
}
