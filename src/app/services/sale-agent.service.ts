import { Injectable } from '@angular/core';
import {Order} from '../models/Order';


@Injectable({
  providedIn: 'root'
})
export class SaleAgentService {

  constructor() { }
  viewCustomerOrders(customerId: string): Order[] {
    // Implementation to view customer orders
    return [];
  }

  modifyCustomerOrders(orderId: string): void {
    // Implementation to modify customer orders
  }

  manageCustomerAccount(customerId: string): void {
    // Implementation to manage customer account
  }

}
