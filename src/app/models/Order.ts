import { OrderItem } from './OrderItem';
import { Address } from './Address';
import { Card } from './Card';
import { Customer } from './Customer';

export interface Order {
  id: string;
  customer: Customer;
  orderItems: OrderItem[];
  totalAmount: number;
  TPS: number;
  stateTax: number;
  TTC: number;
  status: string;
  orderDate: number[];
  shippingAddress: Address;
  card: Card;
}