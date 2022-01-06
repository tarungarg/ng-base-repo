import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ProductState } from '../stores/states/product.state';
import { IProduct } from './../stores/models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  @Select(ProductState.getProductList)
  productsList$: Observable<IProduct[]>;

  @Select(ProductState.productsLoading)
  productLoading$: Observable<IProduct[]>;

  constructor() {}

  trackById(index: number, product: IProduct) {
    return product.id;
  }
}
