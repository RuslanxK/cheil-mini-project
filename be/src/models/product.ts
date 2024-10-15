import mongoose, { Schema } from 'mongoose';
import { IProduct } from '../interfaces/IProduct';

const InstallmentSchema: Schema = new Schema({
  value: { type: Number, required: true },
  period: { type: Number, required: true },
});

const PriceSchema: Schema = new Schema({
  value: { type: Number, required: true },
  currency: { type: String, required: true },
  installment: { type: InstallmentSchema, required: true },
  validFrom: { type: Date, required: true },
  validTo: { type: Date, required: true },
});

const ProductSchema: Schema = new Schema({
  image: { type: String, required: true },
  code: { type: String, required: true },
  name: { type: String, required: true },
  color: { type: String, required: true },
  capacity: { type: Number, required: true },
  dimensions: { type: String, required: true },
  features: { type: [String], required: true },
  energyClass: { type: String, required: true },
  price: { type: PriceSchema, required: true },
});

const Product = mongoose.model<IProduct>('Product', ProductSchema);
export default Product;