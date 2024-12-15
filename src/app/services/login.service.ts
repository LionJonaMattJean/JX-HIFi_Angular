import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';
import { CustomerService } from './customer.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //sert à stocké le customerId pour aller le rechercher dans la confirmation de transaction
  private customerId = new BehaviorSubject<string | null>(null);

  constructor(private customerService: CustomerService) { }

  logIntoAccount(email: string, password: string): void {
    // search for customerId based on email and password
    this.customerService.getCustomers().subscribe((customers) => {
      const customer = customers.find(
        (customer) => customer.email === email && customer.password === password
      );

      if (customer) {
        this.customerId.next(customer.id); 
      } else {
        this.customerId.next(null);
      }
    });
  }

  getCustomerId(): Observable<string | null>{
    return this.customerId.asObservable();
  }

  createAccount(name:string, email:string, pass:string){
        //later implement this with DB
    console.log(name + "\n" + email + "\n" + pass)
  }
}
