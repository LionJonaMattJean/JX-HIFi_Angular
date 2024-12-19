import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { CustomerService } from '../../../services/customer.service';
import { Customer } from '../../../models/Customer';


@Component({
  selector: 'app-sub-total',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sub-total.component.html',
  styleUrl: './sub-total.component.css'
})
export class SubTotalComponent {

  constructor(private router: Router,private customerService: CustomerService){}
  
  onProceedToPayment(): void {
    this.customerService.getCustomerById('customerId').subscribe((customerData: Customer) => {
      if (customerData) {
        this.customerService.setUserInfo(customerData); 
        this.router.navigate(['/confirmation'], {
          state: { userInfo: customerData } 
        });
      }
    });
  }

}
