import {User} from './User';
import {Address} from './Address';

export interface Administrator extends User{
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: Address;



}
