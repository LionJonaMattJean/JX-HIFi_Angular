import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Category} from '../../../../models/Category';
import {CategoryService} from '../../../../services/category.service';

@Component({
  selector: 'app-categories-detail',
  standalone: true,
    imports: [
        NgForOf,
        NgIf,
        RouterLink
    ],
  templateUrl: './categories-detail.component.html',
  styleUrl: './categories-detail.component.css'
})
export class CategoriesDetailComponent implements OnInit {
  id:string='';
  category?: Category;
  categoryDetail:{label:string,value:any}[]= [];

  constructor(private categoryService:CategoryService,private route:ActivatedRoute) {}

  ngOnInit(): void {
  this.id=String(this.route.snapshot.paramMap.get('id'));
  this.categoryService.getCategory(this.id).subscribe((data:Category)=>{
    this.category=data;
    this.categoryDetail=[
    {label:'ID',value:this.category?.id},
    {label:'Nom',value:this.category?.name},
    {label:'Description',value:this.category?.description}
    ];
  });
  }



}
