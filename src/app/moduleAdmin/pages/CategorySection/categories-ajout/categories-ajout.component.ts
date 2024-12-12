import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {Category} from '../../../../models/Category';
import {CategoryService} from '../../../../services/category.service';

@Component({
  selector: 'app-categories-ajout',
  standalone: true,
    imports: [
        FormsModule,
        NgIf,
        ReactiveFormsModule,
        RouterLink
    ],
  templateUrl: './categories-ajout.component.html',
  styleUrl: './categories-ajout.component.css'
})
export class CategoriesAjoutComponent implements OnInit {
  category: Category = {
    id: "",
    name: '',
    description:''
  };
  categoryForm!:FormGroup;
  constructor(private categoryService:CategoryService,private fb:FormBuilder) { }
  ngOnInit() {
    this.categoryForm=this.fb.group({
      name:[''],
      description:['']
    })
  }
  ajoutCategory() {

  }
}
