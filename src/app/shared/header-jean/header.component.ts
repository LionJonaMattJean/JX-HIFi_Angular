import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/Category';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule,
    NgFor, NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  route: Router = inject(Router)
  categoryService: CategoryService = inject(CategoryService);
  listCategory: Category[] = [];

  constructor() {
    this.categoryService.getCategories().subscribe(x => this.listCategory = x);
  }

  searchProduct(keyword: string): void {
    if (keyword && keyword.length > 0)
      this.route.navigate(['/search', keyword.toLowerCase()]);
    }
}
