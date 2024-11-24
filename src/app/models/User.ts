import { Address } from "./Address";

export interface User {

  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: Address;
  role: string;

}
