import { Component } from '@angular/core';
import { ConfirmationComponent } from "../payment-confirmation-matt/confirmation.component";

@Component({
  selector: 'app-info-confirmation',
  standalone: true,
  imports: [ConfirmationComponent],
  templateUrl: './info-confirmation.component.html',
  styleUrl: './info-confirmation.component.css'
})
export class InfoConfirmationComponent {

}
