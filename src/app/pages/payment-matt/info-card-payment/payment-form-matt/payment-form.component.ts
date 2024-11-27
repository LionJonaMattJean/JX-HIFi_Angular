import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImagesPaymentComponent } from "../images-payment/images-payment.component";
import { PaymentChoicesComponent } from "../payment-choices/payment-choices.component";
import { PaymentFormulaireComponent } from "../payment-formulaire/payment-formulaire.component";
import { PaymentAlternateShippingComponent } from "../payment-alternate-shipping/payment-alternate-shipping.component";


@Component({
  selector: 'app-payment-form',
  standalone: true,
  imports: [FormsModule, ImagesPaymentComponent, PaymentChoicesComponent, PaymentFormulaireComponent, PaymentAlternateShippingComponent],
  templateUrl: './payment-form.component.html',
  styleUrl: './payment-form.component.css'
})
export class PaymentFormComponent {
  


}
