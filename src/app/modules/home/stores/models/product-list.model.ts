import { IProduct } from './product.model';

export interface IProductList {
  hasError: boolean;
  loading: boolean;
  error: any;
  products: IProduct[];
}
