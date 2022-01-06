import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Store as NXStore } from '@ngxs/store';
import { ProductActions } from '../stores/actions/product.actions';

@Injectable({
  providedIn: 'root',
})
export class ProductsResolver implements Resolve<void> {
  constructor(private nxStore: NXStore) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.nxStore.dispatch(new ProductActions.ProductFetch());
  }
}
