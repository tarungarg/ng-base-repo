export const PRODUCT_FETCH = '[Product action] Product fetch';
import { IProduct } from './../models/product.model';
export const PRODUCT_FETCH_SUCCESS = '[Product actions] Product fetch success';
export const PRODUCT_FETCH_FAIL = '[Product actions] Product fetch fail';

export namespace ProductActions {
  export class ProductFetch {
    static readonly type = PRODUCT_FETCH;

    constructor() {}
  }
  export class ProductFetchSuccess {
    static readonly type = PRODUCT_FETCH_SUCCESS;

    constructor(public products: IProduct[]) {}
  }
  export class ProductFetchFail {
    static readonly type = PRODUCT_FETCH_FAIL;

    constructor(public errors: any) {}
  }
}
