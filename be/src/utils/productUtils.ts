import Product from '../models/product';
import { IProduct } from '../interfaces/IProduct';
import { Types } from 'mongoose'; 


export const checkUniqueProductCode = async (code: string, excludeId?: string): Promise<IProduct | null> => {
  const query: any = { code };
  
  if (excludeId && Types.ObjectId.isValid(excludeId)) {
    query._id = { $ne: excludeId };
  }

  return await Product.findOne(query);
};
