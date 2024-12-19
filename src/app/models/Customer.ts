import {User} from './User';
import {Order} from './Order';

export interface Customer extends User {

  orders:Order[];
}
