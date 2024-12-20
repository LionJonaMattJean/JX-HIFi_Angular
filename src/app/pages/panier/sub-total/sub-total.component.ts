import { Component} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';
import { ShoppingCartService } from '../../../services/shopping-cart.service';

@Component({
  selector: 'app-sub-total',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sub-total.component.html',
  styleUrl: './sub-total.component.css'
})
export class SubTotalComponent {

  constructor(private router: Router,              
              private loginService: LoginService,
              private shoppingCartService: ShoppingCartService
              ){}
    
  async onProceedToPayment(): Promise<void> {
    const customerId = await firstValueFrom(this.loginService.getCustomerId());
    if (!customerId) {
      console.error('Customer ID is null or undefined');
      return;
    }

    this.shoppingCartService.loadCart();
    this.router.navigate(['/confirmation'], { state: { customerId } });
  }
}
