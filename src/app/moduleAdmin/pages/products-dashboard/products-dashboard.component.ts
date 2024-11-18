import { Component } from '@angular/core';
import {AdminLayoutComponent} from '../layout/admin-layout/admin-layout.component';

@Component({
  selector: 'app-products-dashboard',
  standalone: true,
  imports: [
    AdminLayoutComponent
  ],
  templateUrl: './products-dashboard.component.html',
  styleUrl: './products-dashboard.component.css'
})
export class ProductsDashboardComponent {

}
