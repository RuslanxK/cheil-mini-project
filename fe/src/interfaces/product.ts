export type EnergyClass = 'A' | 'B' | 'C';

export type Capacity = 8 | 9 | 10.5;

export const commonDimensions = ['55 x 60 x 85 cm', '60 x 60 x 85 cm', '50 x 60 x 85 cm', '40 x 60 x 85 cm'];

export type Features =
  | 'Drzwi AddWash™'
  | 'Panel AI Control'
  | 'Silnik inwerterowy'
  | 'Wyświetlacz elektroniczny';


  export const featureOptions: Features[] = [
    'Drzwi AddWash™',
    'Panel AI Control',
    'Silnik inwerterowy',
    'Wyświetlacz elektroniczny',
  ];

export interface IProduct {
  _id: string;
  image: string;
  code: string;
  name: string;
  color: string;
  capacity: Capacity;
  dimensions: string;
  features: Features[];
  energyClass: EnergyClass;
  price: {
    value: number;
    currency: string;
    installment: {
      value: number;
      period: number;
    };
    validFrom: Date;
    validTo: Date;
  };
}
