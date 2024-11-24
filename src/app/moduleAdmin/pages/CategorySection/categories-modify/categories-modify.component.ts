import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Category} from '../../../../models/Category';
import {CategoryService} from '../../../../services/category.service';

@Component({
  selector: 'app-categories-modify',
  standalone: true,
    imports: [
        FormsModule,

        NgIf,
        ReactiveFormsModule,
        RouterLink
    ],
  templateUrl: './categories-modify.component.html',
  styleUrl: './categories-modify.component.css'
})
export class CategoriesModifyComponent implements OnInit{
  id: string = "";
  category?: Category;

  constructor(private categoryService:CategoryService,private route:ActivatedRoute) {}

  ngOnInit() {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.categoryService.getCategoryById(this.id).subscribe(category => {
      this.category = category;
    });
  }

  modifyCategory() {

  }
}
