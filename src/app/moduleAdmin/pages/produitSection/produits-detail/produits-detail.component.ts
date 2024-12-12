import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../../../services/products.service';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {Product} from '../../../../models/Product';

import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-produits-detail',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    RouterLink
  ],
  templateUrl: './produits-detail.component.html',
  styleUrl: '../../../style-admin.css'
})
export class ProduitsDetailComponent implements OnInit {

  id: string="";
  produit?: Product;
  productDetails: { label: string, value: any }[] = [];

  constructor(private produitsService: ProductsService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.produitsService.getProductById(this.id).subscribe(product => {
      this.produit = product;

      this.productDetails = [
        {label: 'Catégorie', value: product?.category.name},
        {label: 'Marque', value: product?.brand},
        {label: 'Description', value: product?.description},
        {label: 'Coûtant', value: `${product?.costPrice}$`},
        {label: 'Prix de vente', value: `${product?.sellPrice}$`},
        {label: 'Prix Special', value: `${product?.specialPrice}$`},
        {label: 'En spécial', value: product?.onSale ? 'Oui' : 'Non'},
        {label: 'Quantité', value: product?.stock},
        {label: 'Couleurs', value: product?.colors.join(', ')},
        {label: 'Spécifications', value: product?.shortSpecifications.map(spec => spec.description).join(', ')},
        {label: 'Spécification détaillé', value: product?.specificationDetails.map(spec => spec.description).join(', ')},
      ];
    });

  }
}
