import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListJeanComponent } from './product-list-jean/product-list-jean.component';
import { ProductFilterJeanComponent } from './product-filter-jean/product-filter-jean.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductListJeanComponent,
    ProductFilterJeanComponent
  ],
  exports: [
    ProductListJeanComponent,
    ProductFilterJeanComponent
  ]
})
export class DetailCategoryJeanModule { }
