/*
    Auteur: Jean Couturier
    derniere MaJ (YY/MM/DD) par 
                  24/11/20
*/

import { Component } from '@angular/core';
import { ProductFilterJeanComponent } from "../product-filter-jean/product-filter-jean.component";
import { ProductListJeanComponent } from "../product-list-jean/product-list-jean.component";

@Component({
  selector: 'app-cat-product-display',
  standalone: true,
  imports: [
    ProductFilterJeanComponent,
    ProductListJeanComponent],
  templateUrl: './cat-product-display.component.html',
  styleUrl: './cat-product-display.component.css'
})
export class CatProductDisplayComponent {

}
