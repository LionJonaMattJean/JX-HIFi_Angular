import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor() { }
  confirmAddress(): void {
    // Implement confirm address logic here
  }
  updateAddress(address: string, city: string, province: string, postalCode: string, country: string): void {
    // Implement update address logic here
  }
}
