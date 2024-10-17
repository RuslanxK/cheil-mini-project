// productUtils.ts
import { IProduct, Capacity, EnergyClass, Features } from 'interfaces/product';

export const getInitialProductData = (): IProduct => ({
  _id: '',
  image: '',
  code: '',
  name: '',
  color: '',
  capacity: '' as unknown as Capacity,
  dimensions: '',
  features: [] as Features[],
  energyClass: '' as unknown as EnergyClass,
  price: {
    value: 0,
    currency: '',
    installment: {
      value: '' as unknown as number,
      period: '' as unknown as number,
    },
    validFrom: '' as unknown as Date,
    validTo: '' as unknown as Date,
  },
});
