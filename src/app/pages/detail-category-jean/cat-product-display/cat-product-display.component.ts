/*
    Auteur: Jean Couturier
    derniere MaJ (YY/MM/DD) par 
                  24/11/20
                  24/11/21  par Jean
                  24/11/30  par Jean

*/

import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { Product } from '../../../models/Product';
import { DetailCategoryJeanModule } from '../detail-category-child-jean/detail-category-jean.module';
import { NgFor, NgIf } from '@angular/common';
import { FilterService } from '../../../services/filter.service';
import { Filters } from '../../../models/Filter';

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

export class CatProductDisplayComponent implements OnInit {
  // injection des services necessaire
  route: ActivatedRoute = inject(ActivatedRoute);
  produitService = inject(ProductsService);
  filterService = inject(FilterService);

  productsOfCategory: Product[] = [];
  filteredProducts: Product[] = [];
  categoryId: string = "";

  brands: string[] = [];
  colors: string[] = [];
  minPrice: number = 0;
  maxPrice: number = 0;

  ngOnInit(): void {
    // Surveille les changements d'URL pour actualiser les produits
    this.route.params.subscribe(params => {
      this.categoryId = params['categoryId'];
      this.setProductList();
    });

    // Surveille les changements de filtres pour que le offCanvas soit synchro en temp reel
    this.filterService.filters$.subscribe(filters => {
      this.applyFilters(filters);
    });
  }

  setProductList(): void {
    const callback = (products: Product[]) => {
      this.productsOfCategory = products;
      this.filteredProducts = products;

      // MàJ des options des filtres (SET pour eviter tout doublons)
      this.brands = Array.from(new Set(products.map(p => p.brand)));
      this.colors = Array.from(new Set(products.flatMap(p => p.colors || [])));

      // ... = tous les price sont evaluer individuellement.
      const prices = products.map(p => p.sellPrice);
      this.minPrice = Math.min(...prices);
      this.maxPrice = Math.max(...prices);

      // Réinitialiser les filtres avec les nouvelles options quand on change de CAT
      this.filterService.updateFilters({
        brands: [],
        colors: [],
        minPrice: this.minPrice,
        maxPrice: this.maxPrice
      });
    };

    // if (this.categoryId === 'CAT111') {
    //   this.produitService.getAllProductOnSale().subscribe(callback);
    // } else {
    //   this.produitService.getAllProductByCategory(this.categoryId).subscribe(callback);
    // }
    if (this.categoryId === 'CAT111') { // si c'est la categorie des produit en promotion
      this.produitService.getAllProductOnSale().subscribe(callback);
    } else if (!this.categoryId.startsWith('CAT')) {  // si c'est une recherche qui vien du searchBar
      this.produitService.getAllProductByKeyword(this.categoryId).subscribe(callback);
    } else {
      this.produitService.getAllProductByCategory(this.categoryId).subscribe(callback);
    }
  }

  applyFilters(filters: Filters): void {
    this.filteredProducts = this.productsOfCategory.filter(product => {
      const matchesBrand = !filters.brands.length || filters.brands.includes(product.brand);
      const matchesColor = !filters.colors.length || product.colors.some(color => filters.colors.includes(color));
      const matchesPrice = filters.maxPrice === null || product.sellPrice <= filters.maxPrice;

      return matchesBrand && matchesColor && matchesPrice;
    });
  }
}
