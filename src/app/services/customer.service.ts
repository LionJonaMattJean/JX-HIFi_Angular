import { Injectable } from '@angular/core';
import { Order } from '../models/Order';
import { Customer } from '../models/Customer';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private userInfoSubject = new BehaviorSubject<Customer | null>(null);

  private url: string = "http://localhost:8080";
  constructor(private httpRequest: HttpClient) { };

  setUserInfo(userInfo: Customer): void {
    this.userInfoSubject.next(userInfo);
  }

  getUserInfo(): Observable<Customer | null> {
    return this.userInfoSubject.asObservable();
  }

  getUserInfoValue(): Customer | null {
    return this.userInfoSubject.getValue();
  }


  createCustomer(newCustomer: any): Observable<Customer> {
    return this.httpRequest.post<Customer>(this.url + "/customer/createnew", newCustomer);
  }

  getCustomers(): Observable<Customer[]> {
    return this.httpRequest.get<Customer[]>(this.url + "/customers");
  }

  getCustomerById(id: string): Observable<Customer> {
    return this.httpRequest.get<Customer>(this.url + "/customer/" + id);
  }

  getCustomerByMail(mail: string): Observable<Customer> {
    return this.httpRequest.get<Customer>(this.url + "/customer/get-by-mail/" + mail);
  }

  updateCustomer(payload: any, id: string): Observable<Customer> {
    return this.httpRequest.put<Customer>(this.url + "/customer/update/" + id, payload);
  }

  deactivate(id: string, user: any) {
    return this.httpRequest.put<Customer>(this.url + "/customer/deactivate/" + id, user);
  }

  deleteCustomer(id: string) {
    return this.httpRequest.delete(this.url + "/customer/delete/" + id);
  }

}
