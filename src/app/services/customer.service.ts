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

  //this is a function that I made to make sure the program doesn't bug,
  //what is inside is useless
  createCustomer(item: any):Observable<Customer>{
    return this.httpRequest.get<Customer>(this.url + "/customers/newaccount");
  }

  getCustomers(): Observable<Customer[]> {
    return this.httpRequest.get<Customer[]>(this.url + "/customers");
  }

  getCustomerById(id: string): Observable<Customer> {
    return this.httpRequest.get<Customer>(this.url + "/customers/" + id);
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

  updateCustomer(payload:any,id:string): Observable<Customer> {
    return this.httpRequest.put<Customer>(this.url + "/customer/update/" + id, payload);
  }
}
