import { IProduct } from '../interfaces/IProduct';
export declare const checkUniqueProductCode: (code: string, excludeId?: string) => Promise<IProduct | null>;
