import { NgIf } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../../../models/Product';
import { OrderItemService } from '../../../../services/order-item.service';

@Component({
  selector: 'app-quantity-and-cart-btn-jean',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './quantity-and-cart-btn-jean.component.html',
  styleUrl: './quantity-and-cart-btn-jean.component.css'
})
export class QuantityAndCartBtnJeanComponent {
  @Input() product: Product | undefined;
  orderItem_service: OrderItemService = inject(OrderItemService);

  addToCart() {
    if (this.product) {
      this.orderItem_service.createOrderItem(this.product, this.txtQty);
    }
    else {
      alert("Undefined product !")
    }
  }

  onQtyManualyChanged() {
    if (this.txtQty < 1 || this.txtQty > 5) {
      alert('You can not override the maximum of 5');
      this.txtQty = 1;
    }
  }
  txtQty: number = 1;
  removeQty() {
    if (this.txtQty > 1 && this.txtQty <= 5) {
      this.txtQty--;
    }
  }
  addQty() {
    if (this.txtQty >= 1 && this.txtQty < 5) {
      this.txtQty++;
    }
  }

  

}
