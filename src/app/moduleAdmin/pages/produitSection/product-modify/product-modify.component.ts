import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Product} from '../../../../models/Product';
import {ProductsService} from '../../../../services/products.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Category} from '../../../../models/Category';
import {CategoryService} from '../../../../services/category.service';

@Component({
  selector: 'app-product-modify',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLink,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './product-modify.component.html',
  styleUrl: './product-modify.component.css'
})
export class ProductModifyComponent implements OnInit {

  id: string = "";
  produit?: Product;
  categories?: Category[];


  constructor(private produitsService: ProductsService,private categoryService:CategoryService,private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.produitsService.getProductById(this.id).subscribe(product => {
      this.produit = product;
    });
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
    });

  }

  removeSpecificationDetail(i: number) {
    this.produit?.specificationDetails.splice(i, 1);
  }

  addSpecificationDetail() {
      this.produit?.specificationDetails.push({ id:'', title: '', description: '' });
  }

  removeSpecificationShort(i: number) {
    this.produit?.shortSpecifications.splice(i, 1);
  }

  addSpecificationShort() {
    this.produit?.shortSpecifications.push({id:'', title: '', description: '' });
  }

  removeImage(i: number) {
    this.produit?.images.splice(i, 1);
  }

  addImage() {
    this.produit?.images.push({id:'',idProduct:this.produit?.id ,url: '' });
  }

  removeColor(i: number) {
    this.produit?.colors.splice(i, 1);
  }

  addColor() {
    this.produit?.colors.push('');
  }

  modifyProduit() {

  }
}
