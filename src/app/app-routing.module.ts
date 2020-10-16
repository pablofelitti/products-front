import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component'
import { ProductDetailComponent } from './product-detail/product-detail.component'
import { ProductDetailNewComponent } from './product-detail-new/product-detail-new.component'

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'productDetail/:id', component: ProductDetailComponent },
  { path: 'newProduct', component: ProductDetailNewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
