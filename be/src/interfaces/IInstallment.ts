import { Document } from 'mongoose';

export interface IInstallment extends Document {
  value: number;
  period: number;
}
