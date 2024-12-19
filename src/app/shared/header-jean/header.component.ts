import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/Category';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { ShoppingCart } from '../../models/ShoppingCart';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule,
    NgFor, NgIf,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  route: Router = inject(Router)
  categoryService: CategoryService = inject(CategoryService);
  
  shoppingCartServ: ShoppingCartService = inject(ShoppingCartService)
  
   numberOfItems: number = 0;


  listCategory: Category[] = [];

  constructor() {
    this.categoryService.getCategories().subscribe(x => this.listCategory = x);
    

  }

  searchProduct(keyword: string): void {
    if (keyword && keyword.length > 0)
      this.route.navigate(['/search', keyword.toLowerCase()]);
    }

    ngOnInit(): void {
    this.shoppingCartServ.cartItems$.subscribe(count => {
      this.numberOfItems = count;
    });
  }
}
