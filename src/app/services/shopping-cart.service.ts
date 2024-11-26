import { Injectable } from '@angular/core';
import { OrderItem } from '../models/OrderItem';
import { ShoppingCart } from '../models/ShoppingCart';
import { Customer } from '../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private static instance: ShoppingCartService;
  private static shopppingCart: ShoppingCart;

  constructor() {
    ShoppingCartService.shopppingCart = {
      instance: {} as ShoppingCart,
      customer: {} as Customer,
      cartItems: [],
      total: 0
    };
  }

  public static getInstance(): ShoppingCartService {
    if (!ShoppingCartService.instance) {
      ShoppingCartService.instance = new ShoppingCartService();
    }
    return ShoppingCartService.instance;
  }

  public addItem(orderItem: OrderItem) {
    ShoppingCartService.shopppingCart.cartItems.push(orderItem);
    console.log(ShoppingCartService.shopppingCart.cartItems); // pour test

    this.calculateTotal(orderItem.subTotal);
  }

  public removeItem(orderItemId: string) {
    /*  this._cartItems = this._cartItems.filter(item => item.id !== orderItemId);
      this.calculateTotal();*/
  }

  public updateItemQuantity(orderItemId: string, newQuantity: number) {
    /*  const item= this._cartItems.find(item => item.id === orderItemId);
      if(!item) return; //todo throw error or log, item not found in user interface
      item.quantity = newQuantity;
      this.calculateTotal();*/
  }

  public calculateTotal(priceItemAdded: number) {
    ShoppingCartService.shopppingCart.total += priceItemAdded;
    // console.log("sub total du shoppiing cart:" + ShoppingCartService.shopppingCart.total)
  }

  public clearCart() {
    /*   this._cartItems = [];
       this.calculateTotal();*/
  }
  public checkout() {
    //todo implement checkout logic
    //create order and add to customer order history
    //clear cart
    //update stock
    //use front end framework to display success message
    //use front end framework to display error message
    //use front end framework to get user input for creating order
  }
}
