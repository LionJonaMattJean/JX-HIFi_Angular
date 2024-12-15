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
  userInfo: any = {
    name: '',
    address: '',
    email: '',
    username: '',
    paymentMode: ''
  };
  
  constructor(private router: Router){}
  
  toggleSameAddress() {
    this.sameAddress = !this.sameAddress;
  }
  confirmPayment() {
    // Collecte des informations du formulaire dans un objet (userInfo)
    this.userInfo.paymentMode = this.modePaiement;
    // Naviguer vers la page de confirmation en passant les données via 'state'
    this.router.navigate(['/confirmation'], { state: { userInfo: this.userInfo } });
  }



}
