import {User} from './User';
import {Order} from './Order';
import {OrderItem} from './OrderItem';
export class Customer extends User {

  private _orders:Order[];


  constructor(id: string, email: string, password: string, firstName: string, lastName: string, phone: string, address: string, orders: Order[]) {
    super(id, email, password, firstName, lastName, phone, address);
    this._orders = orders;
  }
/*todo complete logic or delete not use*/
  public addOrder(order: Order): void {
    this._orders.push(order);
  }

  public viewOrderHistory(): Order[] {
    // Implement view order history logic here
    return this._orders;
  }

  public trackOrder(orderId: string): Order | undefined {
    // Implement track order logic here
    return this._orders.find(order => order.id === orderId);
  }

  public cancelOrder(orderId: string): void {
    // Implement cancel order logic here
    this._orders = this._orders.filter(order => order.id !== orderId);
  }

  public manageAccount(): void {
    // Implement manage account logic here
  }

}
