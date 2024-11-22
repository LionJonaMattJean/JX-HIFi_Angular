import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Product } from '../../../../models/Product';
import { ProductsService } from '../../../../services/products.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product-list-jean',
  standalone: true,
  imports: [
    RouterModule,
  ],
  templateUrl: './product-list-jean.component.html',
  styleUrl: './product-list-jean.component.css'
})
export class ProductListJeanComponent {
  @Input() selectedProduct: Product | undefined;
}
