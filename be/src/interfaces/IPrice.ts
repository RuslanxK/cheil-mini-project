import { Document } from 'mongoose';
import { IInstallment } from './IInstallment';

export interface IPrice extends Document {
  value: number;
  currency: string;
  installment: IInstallment;
  validFrom: Date;
  validTo: Date;
}
