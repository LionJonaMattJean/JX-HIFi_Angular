import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment-alternate-shipping',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './payment-alternate-shipping.component.html',
  styleUrl: './payment-alternate-shipping.component.css'
})
export class PaymentAlternateShippingComponent {
    //gestion de l'adresse de livraison
    sameAddress: boolean = false;
    ToggoleTableLivraison(): void{
      this.sameAddress = !this.sameAddress;
    }

}
