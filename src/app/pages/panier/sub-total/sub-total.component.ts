import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { CustomerService } from '../../../services/customer.service';
import { Customer } from '../../../models/Customer';
import { LoginService } from '../../../services/login.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-sub-total',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sub-total.component.html',
  styleUrl: './sub-total.component.css'
})
export class SubTotalComponent {

  constructor(private router: Router,
    private customerService: CustomerService,
    private loginService: LoginService,
    private activatedRoute:ActivatedRoute){}
  
  onProceedToPayment(): void {
  const customerId: any = this.customerService.getCustomers(); 
  console.log('Customer ID:', customerId);
    this.customerService.getCustomerById(customerId).subscribe(
      (customerData: Customer) => {
      if (customerData) {
        this.customerService.setUserInfo(customerData); 
        this.router.navigate(['/confirmation'], {
          state: { userInfo: customerData } 
        });
      }
    });
  }

}
