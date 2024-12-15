import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImagesPaymentComponent } from "../images-payment/images-payment.component";
import { PaymentChoicesComponent } from "../payment-choices/payment-choices.component";
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-payment-form',
  standalone: true,
  imports: [ FormsModule,NgIf,CommonModule,
    ImagesPaymentComponent,
    PaymentChoicesComponent],
  templateUrl: './payment-form.component.html',
  styleUrl: './payment-form.component.css',

})


export class PaymentFormComponent {

  sameAddress: boolean = false;
  modePaiement: string = '----';
  
  constructor(){}
  
  toggleSameAddress() {
    this.sameAddress = !this.sameAddress;
  }

}
