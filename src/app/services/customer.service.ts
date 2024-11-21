import { Injectable } from '@angular/core';
import {Order} from '../models/Order';
import {Customer} from '../models/Customer';

import {Observable, of} from 'rxjs';
import mockdata from '../../mockData/mock_json/customer.mock.json';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  getCustomers():Observable<Customer[]>{
    return of(mockdata);
  }
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
