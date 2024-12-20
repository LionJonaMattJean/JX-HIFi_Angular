import { inject, Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Order } from '../models/Order';
// import mockData from '../../mockData/mock_json/orders.mock.json';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private url: string = "http://localhost:8080";
  httpRequest = inject(HttpClient);

  getOrders(): Observable<Order[]> {
    return this.httpRequest.get<Order[]>(this.url + "/orders");
  }
  getAllOrderTable(): Observable<Order[]> {
    return this.httpRequest.get<Order[]>(this.url + "/table/orders");
  }

  getOrderById(id: string): Observable<Order> {
    return this.httpRequest.get<Order>(this.url + "/order/" + id);
  }

  updateOrder(object: any, id: string) {
    return this.httpRequest.put<Order>(this.url + "/order/modify/" + id, object);
  }

  createNewOrder(order: any) {
    return this.httpRequest.post<Order>(this.url + "/order/new/", order);
  }

}
