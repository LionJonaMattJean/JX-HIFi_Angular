import {Customer} from './Customer';
import {OrderItem} from './OrderItem';

export interface ShoppingCart{
  instance:ShoppingCart;
  customer:Customer;
  cartItems:OrderItem[];
  total:number;

}
