import { Component } from '@angular/core';
import { DetailProductJeanModule } from '../detail-product-child-jean/detail-product-jean.module';

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

}
