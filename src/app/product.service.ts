import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  productUrl = "api/products";

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl)
  }

  getProduct(index): Observable<Product> {
    return this.http.get<Product>(this.productUrl + '/' + index)
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.productUrl, product, this.httpOptions)
  }
}
