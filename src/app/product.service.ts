import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Product } from './product';
import { PRODUCTS } from './mock-products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(PRODUCTS);
  }

  getProduct(index): Observable<Product> {
    return of(PRODUCTS[index-1])
  }

  create(product: Product): void {
    product.id = PRODUCTS.length + 1;
    PRODUCTS.push(product);
  }
}
