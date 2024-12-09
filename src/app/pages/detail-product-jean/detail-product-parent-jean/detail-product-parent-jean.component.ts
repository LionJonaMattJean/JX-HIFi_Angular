import { Component, inject } from '@angular/core';
import { DetailProductJeanModule } from '../detail-product-child-jean/detail-product-jean.module';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { Product } from '../../../models/Product';

@Component({
  selector: 'app-detail-product-parent-jean',
  standalone: true,
  imports: [
    DetailProductJeanModule
  ],
  templateUrl: './detail-product-parent-jean.component.html',
  styleUrl: './detail-product-parent-jean.component.css'
})
export class DetailProductParentJeanComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  produitService = inject(ProductsService)
  product: Product | undefined;

  constructor() {
    const productId = this.route.snapshot.params['productId'];

    this.produitService.getProductById(productId).subscribe(p => this.product = p);
  }
}
