import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImagesPaymentComponent } from "../images-payment/images-payment.component";
import { PaymentChoicesComponent } from "../payment-choices/payment-choices.component";
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RouterModule,Router} from '@angular/router';


@Component({
  selector: 'app-payment-form',
  standalone: true,
  imports: [ FormsModule,NgIf,CommonModule,RouterModule,
             ImagesPaymentComponent,
             PaymentChoicesComponent],
  templateUrl: './payment-form.component.html',
  styleUrl: './payment-form.component.css',

})


export class PaymentFormComponent {

  sameAddress: boolean = false;
  modePaiement: string = '----';
  cardNumber: string = '';

  userInfo: any = {
    name: '',
    address: '',
    email: '',
    username: '',
    paymentMode: ''
  };

  cardRegex = {
    visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    mastercard: /^(?:5[1-5][0-9]{14}|2[2-7][0-9]{14})$/,
    paypal: /^\S+@\S+\.\S+$/,
    interact: null
  }
  
  constructor(private router: Router){}
  
  toggleSameAddress() {
    this.sameAddress = !this.sameAddress;
  }

  validateCardInput(): boolean {
    if (this.modePaiement === 'paypal') {
      return this.cardRegex.paypal.test(this.userInfo.email);
    } else {
      const regex = this.cardRegex [this.modePaiement];
      return regex ? regex.test(this.cardNumber) : false;
    }
  }

  confirmPayment() {
    if (!this.validateCardInput()) {
      alert('Informations de paiement invalides. Veuillez vérifier votre saisie.');
      return;
    }
    // Collecte des informations du formulaire dans un objet (userInfo)
    this.userInfo.paymentMode = this.modePaiement;
    // Naviguer vers la page de confirmation en passant les données via 'state'
    this.router.navigate(['/confirmation'], { state: { userInfo: this.userInfo } });
  }



}
