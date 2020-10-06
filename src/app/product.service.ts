import { Injectable } from '@angular/core';
import { PRODUCTS } from './mock-products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts() {
    return PRODUCTS;
  }
}
