import {Customer} from './Customer';
import {OrderItem} from './OrderItem';
import {Address} from './Address';
import {Card} from './Card';

export interface Order{
  id: string;
   customer: Customer;
  card: Card;
   orderItems: OrderItem[];
  totalAmount: number;
  TPS: number;
  TaxeState: number;
  TTC: number;
  status: string;
  orderDate: Date;
  shippingAddress: Address;

}
