import { inject, Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { OrderItem } from '../models/OrderItem';
import { isModuleNamespaceObject } from 'util/types';
import { ShoppingCartService } from './shopping-cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrderItemService {
  private static idNumber: number = 1;
  shoppingCart_service: ShoppingCartService = inject(ShoppingCartService);

  createOrderItem(productAdded: Product, qtyAdded: number) {
    const orderItem: OrderItem = {
      id: "ORD_IT" + OrderItemService.idNumber++,
      product: productAdded,
      quantity: qtyAdded,
      subTotal: this.calculateSubTotal(productAdded, qtyAdded)
    }
    this.shoppingCart_service.addItem(orderItem);
   
  }

  calculateSubTotal(productAdded: Product, qty: number): number {
    if (productAdded.onSale) {
      return productAdded.specialPrice * qty;
    }
    return productAdded.sellPrice * qty;
  }
}
