import { Injectable } from '@angular/core';
import {map, Observable, of} from 'rxjs';
import {Order} from '../models/Order';
import mockData from '../../mockData/mock_json/orders.mock.json';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() {

  }

  calculateTotal(){
    /*
    const tax =this._totalAmount*(Order.TPS+Order.TaxeState);
    return this._totalAmount+tax;*/
  }
  updateStatus(newStatus: string): void {
    //  this.status = newStatus;
  }
  getOrders(): Observable<Order[]> {
    return of(mockData);
  }
  getOrderById(id: string): Observable<Order> {
    return this.getOrders().pipe(
      map(orders=>orders.find(order=>order.id===id)!)
    );
  }
}
