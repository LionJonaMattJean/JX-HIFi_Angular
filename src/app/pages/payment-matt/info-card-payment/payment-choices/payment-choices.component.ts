import { Component, Input, Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment-choices',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './payment-choices.component.html',
  styleUrl: './payment-choices.component.css'
})
export class PaymentChoicesComponent {

  @Input() modePaiement: string ='----';
  @Output() modePaiementChange = new EventEmitter<string>();

  constructor(){}

  onModePaiementChange(){
    this.modePaiementChange.emit(this.modePaiement);
  }

}
