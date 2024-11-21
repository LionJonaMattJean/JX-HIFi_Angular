import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  calculateTotal(){
    /*
    const tax =this._totalAmount*(Order.TPS+Order.TaxeState);
    return this._totalAmount+tax;*/
  }
  updateStatus(newStatus: string): void {
    //  this.status = newStatus;
  }
}
