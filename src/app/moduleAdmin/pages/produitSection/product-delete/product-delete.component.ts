import { Component } from '@angular/core';
import {NgClass} from '@angular/common';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {Product} from '../../../../models/Product';
import {ProductsService} from '../../../../services/products.service';


@Component({
  selector: 'app-product-delete',
  standalone: true,
  imports: [

    RouterLink,
    NgClass
  ],
  templateUrl: './product-delete.component.html',
  styleUrl: 'product-delete.component.css'
})
export class ProductDeleteComponent {
  produit?:Product;
  id:string;
  isDelete: boolean=false;
  constructor(private route:ActivatedRoute,private produitsService:ProductsService) {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.produitsService.getProductById(this.id).subscribe(product => {
      this.produit = product;
    });
  }

  deleteProduct(){
    this.produitsService.deleteProduct(this.id).subscribe(() => {
      this.isDelete = true;
    });
  }

}
