import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabDetailJeanComponent } from './tab-detail-jean/tab-detail-jean.component';
import { QuickDescriptionProductJeanComponent } from './quick-description-product-jean/quick-description-product-jean.component';
import { QuantityAndCartBtnJeanComponent } from './quantity-and-cart-btn-jean/quantity-and-cart-btn-jean.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TabDetailJeanComponent,
    QuickDescriptionProductJeanComponent,
    QuantityAndCartBtnJeanComponent
  ],
  exports: [
    TabDetailJeanComponent,
    QuickDescriptionProductJeanComponent,
    QuantityAndCartBtnJeanComponent
  ]
})
  
export class DetailProductJeanModule { }
