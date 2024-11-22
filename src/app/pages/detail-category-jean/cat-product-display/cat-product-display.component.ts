/*
    Auteur: Jean Couturier
    derniere MaJ (YY/MM/DD) par 
                  24/11/20
                  24/11/21  par Jean
*/

import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { Product } from '../../../models/Product';
import { DetailCategoryJeanModule } from '../detail-category-child-jean/detail-category-jean.module';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-cat-product-display',
  standalone: true,
  imports: [
    DetailCategoryJeanModule, // importe tout le component enfant
    NgFor, NgIf,
    RouterModule
  ],
  templateUrl: './cat-product-display.component.html',
  styleUrl: './cat-product-display.component.css'
})
export class CatProductDisplayComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  produitService = inject(ProductsService)
  productsOfCategory: Product[] = [];
  categoryId: string = "";

  constructor() {
    // surveille tout changement d'url pour modifier l'affichage en fonction de la categorie
    this.route.params.subscribe(parametreUrl => {
      this.categoryId = parametreUrl['categoryId'];
      this.setProductList();
    })
  }

  setProductList(): void {
    if (this.categoryId === 'CAT111') {
      this.produitService.getAllProductOnSale().subscribe(p => {
        this.productsOfCategory = p;
        // console.log(p); // affichage test
      })
    }
    else {
      this.produitService.getAllProductByCategory(this.categoryId).subscribe(p => {
        this.productsOfCategory = p;
        // console.log(p); // affichage test
      })
    }
  }
}
