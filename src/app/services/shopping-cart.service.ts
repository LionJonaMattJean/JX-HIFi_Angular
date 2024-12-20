import { Injectable } from '@angular/core';
import { OrderItem } from '../models/OrderItem';
import { ShoppingCart } from '../models/ShoppingCart';
import { Customer } from '../models/Customer';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';
import { BehaviorSubject, firstValueFrom, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ShoppingCartService {
  private url: string = "http://localhost:8080/api/cart";

  private cartItemsSubject = new BehaviorSubject<number>(0);
  cartItems$ = this.cartItemsSubject.asObservable();

  private itemsUpdateSubject = new Subject<void>();
  itemsUpdated$ = this.itemsUpdateSubject.asObservable();

  private static instance: ShoppingCartService;
  public static shopppingCart: ShoppingCart;


  constructor(private http: HttpClient,private loginService: LoginService) {
    ShoppingCartService.shopppingCart = {
      instance: {} as ShoppingCart,
      customer: {} as Customer,
      cartItems: [],
      total: 0
    };
  }

  async addItem(orderItem: OrderItem): Promise<void> {
    const customerId = await firstValueFrom(this.loginService.getCustomerId());
    if (!customerId) {
      console.error('Customer ID not available');
      return;
    }
    ShoppingCartService.shopppingCart.cartItems.push(orderItem);
    this.calculateTotal(orderItem.subTotal);
    this.saveCart(customerId);
    this.updateCartItemCount();
    alert('Item added Successfully to your Cart');
  }


  private updateCartItemCount(){
    const totalItems = ShoppingCartService.shopppingCart.cartItems.reduce((total, item) => total + item.quantity, 0);
    this.cartItemsSubject.next(totalItems);
  }


  public saveCart(customerId: string): void {
    this.http.post(`${this.url}/${customerId}/add`, ShoppingCartService.shopppingCart).subscribe(
      (response) => console.log('Cart saved successfully:', response),
      (error) => console.error('Error saving cart:', error)
    );
  }

  public async loadCart(): Promise<void> {
    const customerId = await firstValueFrom(this.loginService.getCustomerId());
    if (!customerId) {
      console.error('Customer ID not available');
      return;
    }

    this.http.get<ShoppingCart>(`${this.url}/${customerId}`).subscribe(
      (cart) => {
        ShoppingCartService.shopppingCart = cart;
        console.log('Cart loaded:', ShoppingCartService.shopppingCart);
      },
      (error) => console.error('Error loading cart:', error)
    );
  }

  public async removeItem(itemId: string): Promise<void> {
    const customerId = await firstValueFrom(this.loginService.getCustomerId());
    if (!customerId) {
      console.error('Customer ID not available');
      return;
    }
  
    const cartItems = ShoppingCartService.shopppingCart.cartItems;
    const itemIndex = cartItems.findIndex((item) => item.id === itemId);
    if (itemIndex > -1) {
      cartItems.splice(itemIndex, 1);
      this.updateCartItemCount();
      this.calculateTotal(-cartItems[itemIndex]?.subTotal || 0);
  
      this.http.delete(`${this.url}/${customerId}/remove/${itemId}`).subscribe(
        () => {
          console.log(`Item ${itemId} removed successfully`);
        },
        (error) => {
          console.error(`Error removing item ${itemId}:`, error);
        }
      );
    } else {
      console.warn(`Item ${itemId} not found in cart`);
    }
  }  

  public updateItemQuantity(orderItemId: string, newQuantity: number) {
    const item = ShoppingCartService.shopppingCart.cartItems.find(i => i.id === orderItemId);
    if (item) {
      item.quantity = newQuantity;
      
      this.calculateTotal(item.product.costPrice);

      this.saveCart(ShoppingCartService.shopppingCart.customer.id);
    } else {
      console.error(`Item with id ${orderItemId} not found.`);
    }
  }

  public calculateTotal(priceItemAdded: number) {
    ShoppingCartService.shopppingCart.total += priceItemAdded;
  }

  public clearCart() {
       ShoppingCartService.shopppingCart.cartItems = [];
       this.loadCart;
       
  }
}
