import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quantity-and-cart-btn-jean',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './quantity-and-cart-btn-jean.component.html',
  styleUrl: './quantity-and-cart-btn-jean.component.css'
})
export class QuantityAndCartBtnJeanComponent {
onQtyManualyChanged() {
  if (this.txtQty < 1 || this.txtQty > 5) {
    alert('You can not override the maximum of 5');
    this.txtQty = 1;
  }
}
txtQty: number = 1; // todo gerer l'entrer d'input manuel
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
  addToCart() {
    throw new Error('Method not implemented.');
  }

}
