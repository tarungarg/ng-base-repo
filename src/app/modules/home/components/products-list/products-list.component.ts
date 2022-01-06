import { Component, Input } from '@angular/core';
import { IProduct } from './../../stores/models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
})
export class ProductsListComponent {
  @Input('product') product: IProduct;
  constructor() {}
}
