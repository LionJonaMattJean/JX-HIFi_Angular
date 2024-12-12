import { Address } from './Address';

export interface Store {
    id: string;
    name: string;
    address: Address;
    telephone: string;
    email: string;
    manager: string;
}