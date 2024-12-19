import { OrderItem } from './OrderItem';
import { Address } from './Address';
import { Dates } from './dates';
import { Card } from './Card';

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