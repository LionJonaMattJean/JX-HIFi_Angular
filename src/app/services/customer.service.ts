import { Injectable } from '@angular/core';
import {Order} from '../models/Order';
import {Customer} from '../models/Customer';
import {OrderItem} from '../models/OrderItem';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }


   addOrder(order: Order): void {

  }

   viewOrderHistory(): Order[] {
    // Implement view order history logic here
    return [];

  }

   trackOrder(orderId: string): Order | undefined {
    // Implement track order logic here
     return  undefined;
  }

   cancelOrder(orderId: string): void {
    // Implement cancel order logic here

  }

  manageAccount(): void {
    // Implement manage account logic here
  }
}
