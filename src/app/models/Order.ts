import { OrderItem } from './OrderItem';
import { Address } from './Address';
import { Card } from './Card';
import { Dates } from './dates';

export interface Order {
  id: string;
  idCustomer: string;
  card: Card;
  orderItems: OrderItem[];
  totalAmount: number;
  TPS: number;
  TaxeState: number;
  TTC: number;
  status: string;
  orderDate: Dates;
  shippingAddress: Address;
}