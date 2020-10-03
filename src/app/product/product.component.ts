import { Component, OnInit } from '@angular/core';
import {Product} from '../product'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product = {
    name: 'First product',
    description: 'This is the description',
    price: 35.7
  }

  constructor() { }

  ngOnInit(): void {
  }

}
