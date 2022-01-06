import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, StateToken } from '@ngxs/store';
import produce from 'immer';
import { ProductsServices } from '../../services/products.services';
import { ProductActions } from '../actions/product.actions';
import { IProductList } from '../models';
import { IProduct } from './../models/product.model';

export const PRODUCT_STATE = new StateToken<any>('productsList');

@State<IProductList>({
  name: PRODUCT_STATE,
  defaults: {
    hasError: true,
    loading: false,
    error: {},
    products: [] as IProduct[],
  },
})
@Injectable()
export class ProductState {
  constructor(private productsServices: ProductsServices) {}

  @Selector()
  static getProductList(state: IProductList): IProduct[] {
    return state.products;
  }

  @Selector()
  static getError(state: IProductList): any {
    return state.error;
  }

  @Selector()
  static hasError(state: IProductList): any {
    return state.hasError;
  }

  @Selector()
  static productsLoading(state: IProductList): any {
    return state.loading;
  }

  @Action(ProductActions.ProductFetch, { cancelUncompleted: true })
  ProductFetch(
    ctx: StateContext<IProductList>,
    action: ProductActions.ProductFetch
  ) {
    ctx.setState(
      produce((draft: IProductList) => {
        draft.loading = true;
      })
    );
    this.productsServices.getProductList().subscribe(
      (products: IProduct[]) => {
        ctx.dispatch(new ProductActions.ProductFetchSuccess(products));
      },
      (error) => {
        ctx.dispatch(new ProductActions.ProductFetchFail(error));
      }
    );
  }

  @Action(ProductActions.ProductFetchSuccess, { cancelUncompleted: true })
  ProductFetchSuccess(
    ctx: StateContext<IProductList>,
    action: ProductActions.ProductFetchSuccess
  ) {
    ctx.setState(
      produce((draft: IProductList) => {
        draft.products = action.products;
        draft.loading = false;
      })
    );
  }

  @Action(ProductActions.ProductFetchFail, { cancelUncompleted: true })
  ProductFetchFail(
    ctx: StateContext<IProductList>,
    action: ProductActions.ProductFetchFail
  ) {
    ctx.setState(
      produce((draft: IProductList) => {
        draft.error = action.errors;
        draft.hasError = true;
        draft.loading = false;
      })
    );
  }
}
