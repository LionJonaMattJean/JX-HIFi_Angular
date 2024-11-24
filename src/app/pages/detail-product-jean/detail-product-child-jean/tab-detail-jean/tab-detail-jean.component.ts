import { Component, Input } from '@angular/core';
import { Product } from '../../../../models/Product';
import { NgFor, NgIf } from '@angular/common';
import { Review } from '../../../../models/Review';

@Component({
  selector: 'app-tab-detail-jean',
  standalone: true,
  imports: [
    NgFor, NgIf
  ],
  templateUrl: './tab-detail-jean.component.html',
  styleUrl: './tab-detail-jean.component.css'
})
export class TabDetailJeanComponent {
  @Input() product: Product | undefined;

  reviewRating(review: Review): string {
    const nbrFullStars = Math.round(review.star)
    const nbrEmptyStars = 5 - nbrFullStars;
    return '★'.repeat(nbrFullStars) + '☆'.repeat(nbrEmptyStars);
  }
}
