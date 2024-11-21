import {Customer} from './Customer';

import {User} from './User';

export interface SalesAgent extends User {
  assignedCustomers: Customer[];


}
