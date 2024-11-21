import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderItemService {

  constructor() { }

  calculateSubTotal(){
  /*  if(this.product.onSale) {
      this.subTotal = this.product.specialPrice * this.quantity;
    }else {
      this.subTotal = this.product.sellPrice * this.quantity;
    }*/
  }
}
