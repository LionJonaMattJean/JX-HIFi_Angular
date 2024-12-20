import { Component, Input } from '@angular/core';
import { AcceuilCarteCategorie } from '../../../models/AcceuilCarteCategorie';
import { CategoryService } from '../../../services/category.service';
import { Category } from '../../../models/Category';
import { RouterLink } from '@angular/router';
import { inject } from '@angular/core';

@Component({
  selector: 'app-carte-categorie',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './carte-categorie.component.html',
  styleUrl: './carte-categorie.component.css'
})
export class CarteCategorieComponent {
  //using Input to inject each category into a card
  @Input() acceuilCarteInput!: AcceuilCarteCategorie;

  categoryService: CategoryService = inject(CategoryService);
  listCategory: Category[] = [];
  constructor() {
    this.categoryService.getCategories().subscribe(x => this.listCategory = x);
  }

}
