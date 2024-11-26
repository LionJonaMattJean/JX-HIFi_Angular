import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-payment-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './payment-form.component.html',
  styleUrl: './payment-form.component.css'
})
export class PaymentFormComponent {
  
  //gestion de l'adresse de livraison
  sameAddress: boolean = false;
  ToggoleTableLivraison(): void{
    this.sameAddress = !this.sameAddress;
  }

}
