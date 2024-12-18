import { Injectable } from '@angular/core';
import { OrderItem } from '../models/OrderItem';
import { ShoppingCart } from '../models/ShoppingCart';
import { Customer } from '../models/Customer';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private static instance: ShoppingCartService;
  public static shopppingCart: ShoppingCart;
  private url: string = "http://localhost:8080/api/cart";

  constructor(private http: HttpClient) {
    ShoppingCartService.shopppingCart = {
      instance: {} as ShoppingCart,
      customer: {} as Customer,
      cartItems: [],
      total: 0
    };
  }

  ngOnInit():void{
    this.loadCart('');
  }

  /*public static getInstance(): ShoppingCartService {
    if (!ShoppingCartService.instance) {
      ShoppingCartService.instance = new ShoppingCartService(new HttpClient());
    }
    return ShoppingCartService.instance;
  }*/


  public addItem(orderItem: OrderItem) {
    ShoppingCartService.shopppingCart.cartItems.push(orderItem);
    console.log(ShoppingCartService.shopppingCart.cartItems); // pour test
    
    this.calculateTotal(orderItem.subTotal);
    this.saveCart('USE1000'); 
    alert("Item added Successfully to your Cart")
  }


  public saveCart(id:string): void {
    this.http.post(this.url + id + '/add', ShoppingCartService.shopppingCart).subscribe(
      response => console.log('Cart saved successfully:', response),
      error => console.error('Error saving cart:', error)
    );
  }

  public loadCart(customerId: string): void {
    this.http.get<ShoppingCart>('USE1000').subscribe(
      cart => {
        ShoppingCartService.shopppingCart = cart;
        console.log('Cart loaded:', ShoppingCartService.shopppingCart);
      },
      error => console.error('Error loading cart:', error)
    );
  }

  public removeItem(orderItemId: string) {
    /*  this._cartItems = this._cartItems.filter(item => item.id !== orderItemId);
      this.calculateTotal();*/
    this.http.delete(this.url + "/api/cart" + "USE1000/remove")
  }

  public updateItemQuantity(orderItemId: string, newQuantity: number) {
    /*  const item= this._cartItems.find(item => item.id === orderItemId);
      if(!item) return; //todo throw error or log, item not found in user interface
      item.quantity = newQuantity;
      this.calculateTotal();*/
      const item = ShoppingCartService.shopppingCart.cartItems.find(i => i.id === orderItemId);
      if (item) {
        item.quantity = newQuantity;
        // Optionally, recalculate the total price
        this.calculateTotal(item.product.costPrice);
        // Persist the updated cart to the backend
        this.saveCart(ShoppingCartService.shopppingCart.customer.id);
      } else {
        console.error(`Item with id ${orderItemId} not found.`);
      }
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
