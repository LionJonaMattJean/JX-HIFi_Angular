import { Component, inject, Input } from '@angular/core';
import { QuantityAndCartBtnJeanComponent } from '../quantity-and-cart-btn-jean/quantity-and-cart-btn-jean.component';
import { ProductsService } from '../../../../services/products.service';
import { Product } from '../../../../models/Product';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-quick-description-product-jean',
  standalone: true,
  imports: [
    QuantityAndCartBtnJeanComponent,
    NgFor, NgIf
  ],
  templateUrl: './quick-description-product-jean.component.html',
  styleUrl: './quick-description-product-jean.component.css'
})
export class QuickDescriptionProductJeanComponent {
  @Input() product: Product | undefined;
  produitService = inject(ProductsService)
  mainImgAlt: string | undefined;
  mainImgSource: string | undefined;

  globalProductStars: string | undefined;

  ngOnInit(): void {
    if (this.product) {
      this.globalProductStars = this.globalProductRating(this.product?.id);
      this.mainImgAlt = this.product?.images.at(0)?.id;
      this.mainImgSource = this.product?.images.at(0)?.url;
    }
  }

  // gestion du changement d'image 
  changeMainPicture(img: MouseEvent): void {
    const choosedImg = img.target as HTMLImageElement;
    this.mainImgSource = choosedImg.src;
    this.mainImgAlt = choosedImg.alt;
  }

  //gestion du rating
  globalProductRating(productId: string): string {
    const nbrFullStars = Math.round(this.produitService.calculateMoyenneStarReview(productId))
    const nbrEmptyStars = 5 - nbrFullStars;
    return '★'.repeat(nbrFullStars) + '☆'.repeat(nbrEmptyStars);
  }
}
