import {Customer} from './Customer';
import {Order} from './Order';
import {User} from './User';

export class SalesAgent extends User {
  private _assignedCustomers: Customer[];


  constructor(assignedCustomers: Customer[],id: string, email:string,password:string,firstName:string,lastName:string,phone:string,address:string) {
    super(id,email,password,firstName,lastName,phone,address);
    this._assignedCustomers = assignedCustomers;
  }

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


  get assignedCustomers(): Customer[] {
    return this._assignedCustomers;
  }

  set assignedCustomers(value: Customer[]) {
    this._assignedCustomers = value;
  }
}
