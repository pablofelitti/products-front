import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail-new',
  templateUrl: './product-detail-new.component.html',
  styleUrls: ['./product-detail-new.component.css']
})
export class ProductDetailNewComponent implements OnInit {

  product: Product = {id : null,
                      name : null,
                      description : null,
                      price : null};

  constructor(private location: Location,
              private productService: ProductService) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

  create(): void {
    this.productService.create(this.product).subscribe();
    this.goBack();
  }

}
