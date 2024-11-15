import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { FooterComponent } from '../../../shared/footer-lion/footer.component';
import { HeaderComponent } from '../../../shared/header-jean/header.component';

@Component({
  selector: 'app-tracking-order',
  standalone: true,
  imports: [SharedModule,FooterComponent,HeaderComponent],
  templateUrl: './tracking-order.component.html',
  styleUrl: './tracking-order.component.css'
})
export class TrackingOrderComponent {

}
