import { Injectable } from '@angular/core';
import { Order } from '../models/Order';
import { Customer } from '../models/Customer';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private url: string = "http://localhost:8080";
  constructor(private httpRequest: HttpClient) { };

  getCustomers(): Observable<Customer[]> {
    return this.httpRequest.get<Customer[]>(this.url + "/customers");
  }

  getCustomerById(id: string): Observable<Customer> {
    return this.httpRequest.get<Customer>(this.url + "/customers/" + id);
  }

  createNewCustomerAccount(newCustomer: Customer): Observable<Customer> {
    return this.httpRequest.post<Customer>(this.url + "/customer/new", newCustomer);
  }



  addOrder(order: Order): void {

  }

  viewOrderHistory(): Order[] {
    // Implement view order history logic here
    return [];

  }

  trackOrder(orderId: string): Order | undefined {
    // Implement track order logic here
    return undefined;
  }

  cancelOrder(orderId: string): void {
    // Implement cancel order logic here

  }

  manageAccount(): void {
    // Implement manage account logic here
  }
}
