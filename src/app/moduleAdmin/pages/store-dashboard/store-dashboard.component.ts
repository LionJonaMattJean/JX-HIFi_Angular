import { Component } from '@angular/core';
import {AdminLayoutComponent} from '../layout/admin-layout/admin-layout.component';
import {MainCardComponent} from '../../component/main-card/main-card.component';

@Component({
  selector: 'app-store-dashboard',
  standalone: true,
  imports: [
    AdminLayoutComponent,
    MainCardComponent
  ],
  templateUrl: './store-dashboard.component.html',
  styleUrl: './store-dashboard.component.css'
})
export class StoreDashboardComponent {

}
