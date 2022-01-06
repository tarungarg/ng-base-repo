import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from './../stores/models/product.model';

@Injectable()
export class ProductsServices {
  constructor(private http: HttpClient) {}

  getProductList() {
    return this.http.get<IProduct[]>('assets/data/products.json');
  }
}
