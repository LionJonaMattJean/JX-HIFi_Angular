import { OrderItem } from './OrderItem';
import { Address } from './Address';
import { Card } from './Card';

export interface Order {
  id: string;
  customerFirstName: string;
  customerLastName: string;
  customerEmail: string;
  customerPhone: string;
  orderItems: OrderItem[];
  totalAmount: number;
  TPS: number;
  stateTax: number;
  TTC: number;
  status: string;
  orderDate: number[];
  shippingAddress: Address;
  card: Card
}