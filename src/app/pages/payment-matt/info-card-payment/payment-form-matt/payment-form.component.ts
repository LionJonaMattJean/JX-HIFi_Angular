import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImagesPaymentComponent } from "../images-payment/images-payment.component";
import { PaymentChoicesComponent } from "../payment-choices/payment-choices.component";
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RouterModule,Router} from '@angular/router';
import { PaymentService } from '../../../../services/payment.service';
import { firstValueFrom } from 'rxjs';


Component({
  selector: 'app-payment-form',
  standalone: true,
  imports: [ FormsModule,NgIf,CommonModule,RouterModule,
             ImagesPaymentComponent,
             PaymentChoicesComponent],
  templateUrl: './payment-form.component.html',
  styleUrl: './payment-form.component.css',

})

type PaymentType = 'visa'|'mastercard'|'paypal'|'interact';

export class PaymentFormComponent {

  sameAddress: boolean = false;
  modePaiement: PaymentType = 'visa';
  cardNumber: string = '';

  userInfo: any = {
    name: '',
    address: '',
    email: '',
    username: '',
    paymentMode: ''
  };

  cardRegex: Record<PaymentType, RegExp | null> = {
    visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    mastercard: /^(?:5[1-5][0-9]{14}|2[2-7][0-9]{14})$/,
    paypal: /^\S+@\S+\.\S+$/,
    interact: /.*/
  };

  
  constructor(private router: Router, private paymentService: PaymentService){}
  
  toggleSameAddress() {
    this.sameAddress = !this.sameAddress;
  }

  validateCardInput(): boolean {
    if (this.modePaiement === 'paypal') {
      const regex = this.cardRegex.paypal;
      return regex ? regex.test(this.userInfo.email) : false;
    } else {
      const regex = this.cardRegex[this.modePaiement];
      return regex ? regex.test(this.cardNumber) : false;
    }
  }

  async confirmPayment() {
    if (!this.validateCardInput()) {
      alert('Informations de paiement invalides. Veuillez vérifier votre saisie.');
      return;
    }

    this.userInfo.paymentMode = this.modePaiement;

    try {
      console.log('Navigation vers /confirmation avec state :', this.userInfo);
      await firstValueFrom(this.paymentService.savePaymentDetails(this.userInfo));
      this.router.navigate(['/confirmation'], { state: { userInfo: this.userInfo } });
    } catch (error) {
      alert('Erreur lors de l’enregistrement des informations de paiement.');
      console.error(error);
    }
}

}
