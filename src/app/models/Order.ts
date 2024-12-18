import { OrderItem } from './OrderItem';
import { Address } from './Address';
import { Dates } from './dates';

export interface Order {
  id: string;
  customerFirstName: string;
  customerLastName: string;
  customerEmail: string;
  customerPhone: string;
  orderItems: OrderItem[];
  totalAmount: number;
  TPS: number;
  TaxeState: number;
  TTC: number;
  status: string;
  orderDate: number[];
  shippingAddress: Address;
}