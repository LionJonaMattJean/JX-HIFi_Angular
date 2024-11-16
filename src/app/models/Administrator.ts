import {User} from './User';

export class Administrator extends User{
  constructor(id: string, email: string, password: string, firstName: string, lastName: string, phone: string, address: string) {
    super(id, email, password, firstName, lastName, phone, address);
  }

  manageProducts(): void {
    // Implementation to manage products
  }

  manageCategories(): void {
    // Implementation to manage categories
  }

  manageUsers(): void {
    // Implementation to manage users
  }

  manageOrders(): void {
    // Implementation to manage orders
  }

  manageStores(): void {
    // Implementation to manage stores
  }

}
