import {Component, inject, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
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
export class QuickDescriptionProductJeanComponent implements OnInit, OnChanges{
  @Input() product: Product | undefined;
  produitService = inject(ProductsService)
  mainImgAlt: string | undefined;
  mainImgSource: string | undefined;

  globalProductStars: string | undefined;

  ngOnInit(): void {
   this.initializeImageAndRating();
  }

  /**
   * Method called when Angular detects changes to the input properties of the component.
   * Specifically, it checks for changes in the 'product' property and initializes image
   * and rating if 'product' has changed and is defined.
   *
   * @param {SimpleChanges} changes - An object of SimpleChanges that holds the current and previous
   * value of changed input properties. This includes the 'product' property, among others.
   * @return {void} This method does not return any value.
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['product'] && this.product) {
      this.initializeImageAndRating();
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

  /**
   * Initializes the image source and alt text along with the product's global rating.
   * Retrieves the first image of the product for display. If the product or its
   * image is not available, default values are used.
   *
   * @return {void} This method does not return a value.
   */
  private initializeImageAndRating(): void {
    if (this.product) {
      this.globalProductStars = this.globalProductRating(this.product.id);
      this.mainImgAlt = this.product.images.at(0)?.id || 'default-alt';
      this.mainImgSource = this.product.images.at(0)?.url || 'path-to-default-image.jpg';
    }
  }
}
