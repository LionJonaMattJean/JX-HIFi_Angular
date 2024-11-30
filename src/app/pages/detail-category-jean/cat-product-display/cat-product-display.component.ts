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
  filteredProduct: Product[] = [];
  categoryId: string = "";
  activeFilter = {
    brands: [] as string[],
    colors: [] as string[],
    maxPrice: null as number | null,
  }

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
        this.filteredProduct = p;
        // console.log(p); // affichage test
      })
    }
    else {
      this.produitService.getAllProductByCategory(this.categoryId).subscribe(p => {
        this.productsOfCategory = p;
        this.filteredProduct = p;
        // console.log(p); // affichage test
      })
    }
  }

  applyFilter(filter: any) {
    this.filteredProduct = this.productsOfCategory.filter(product => {
      const matchesBrand = !filter.brands.length || filter.brands.includes(product.brand);
      const matchesColor = !filter.colors.length || product.colors.some(color => filter.colors.includes(color));
      const matchesPrice = product.sellPrice <= filter.maxPrice;
  
      return matchesBrand && matchesColor && matchesPrice;
    });
    console.log(this.filteredProduct);
  }
}
