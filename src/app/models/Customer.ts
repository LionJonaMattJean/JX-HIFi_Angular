import {User} from './User';
import {Order} from './Order';
import { Card } from './Card';



export interface Customer extends User {

  orders:Order[];
}
