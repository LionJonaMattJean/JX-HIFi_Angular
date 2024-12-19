import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from '../../../../models/Product';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-product-list-jean',
  standalone: true,
  imports: [
    RouterModule,
    NgIf,
  ],
  templateUrl: './product-list-jean.component.html',
  styleUrl: './product-list-jean.component.css'
})
export class ProductListJeanComponent {
  @Input() selectedProduct: Product | undefined;
}
