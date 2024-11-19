import { Component } from '@angular/core';
import {AdminLayoutComponent} from '../layout/admin-layout/admin-layout.component';
import {MainCardComponent} from '../../component/main-card/main-card.component';

@Component({
  selector: 'app-products-dashboard',
  standalone: true,
  imports: [
    AdminLayoutComponent,
    MainCardComponent
  ],
  templateUrl: './products-dashboard.component.html',
  styleUrl: './products-dashboard.component.css'
})
export class ProductsDashboardComponent {

}
