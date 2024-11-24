import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Category} from '../../../../models/Category';
import {NgClass} from '@angular/common';
import {CategoryService} from '../../../../services/category.service';

@Component({
  selector: 'app-categories-delete',
  standalone: true,
  imports: [
    RouterLink,
    NgClass
  ],
  templateUrl: './categories-delete.component.html',
  styleUrl: './categories-delete.component.css'
})
export class CategoriesDeleteComponent implements OnInit{
  id!:string;
  isDelete: boolean=false;
  category?:Category
  constructor(private categoryService:CategoryService,private route:ActivatedRoute) {}

  ngOnInit() {
    this.id=String(this.route.snapshot.paramMap.get('id'));
    this.categoryService.getCategoryById(this.id).subscribe(category => {
      this.category = category;
    });
  }

  deleteCategory() {
    //this.categoryService.deleteCategory(this.id).subscribe(() => {
    this.isDelete = true;
    //});
  }
}
