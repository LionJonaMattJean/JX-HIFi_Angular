import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-total',
  standalone: true,
  imports: [],
  templateUrl: './sub-total.component.html',
  styleUrl: './sub-total.component.css'
})
export class SubTotalComponent {

  constructor(private router: Router) {}
  
  navigateToPaymentForm(): void {
    this.router.navigate(['/payment-form']);
  }
}
