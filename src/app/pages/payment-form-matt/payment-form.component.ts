import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FooterComponent } from '../../shared/footer-lion/footer.component';
import { HeaderComponent } from '../../shared/header-jean/header.component';

@Component({
  selector: 'app-payment-form',
  standalone: true,
  imports: [SharedModule,FooterComponent,HeaderComponent],
  templateUrl: './payment-form.component.html',
  styleUrl: './payment-form.component.css'
})
export class PaymentFormComponent {

}
