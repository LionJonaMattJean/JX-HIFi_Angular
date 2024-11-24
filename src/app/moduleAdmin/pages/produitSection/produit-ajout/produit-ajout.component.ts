import {Component, OnInit} from '@angular/core';
import {Product} from '../../../../models/Product';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {CategoryService} from '../../../../services/category.service';
import {Category} from '../../../../models/Category';


@Component({
  selector: 'app-produit-ajout',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './produit-ajout.component.html',
  styleUrl: './produit-ajout.component.css'
})
export class ProduitAjoutComponent implements OnInit {
  produit!:Product;
  categories?: Category[];
  constructor(private categoryService:CategoryService) {
    this.produit = {
      id: '',
      name: '',
      description: '',
      sellPrice: 0,
      costPrice: 0,
      specialPrice: 0,
      stock: 0,
      onSale: false,
      category: {id:'',name:'',description:''},
      shortSpecifications: [],
      specificationDetails: [],
      images: [],
      colors: [],
      reviews: [],
      brand: ''
    }
  }
  ngOnInit(): void {
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

  addProduit() {

  }
}
