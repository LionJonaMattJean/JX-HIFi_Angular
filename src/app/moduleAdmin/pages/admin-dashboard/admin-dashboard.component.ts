import { Component } from '@angular/core';
import {AdminLayoutComponent} from '../layout/admin-layout/admin-layout.component';
import {MainCardComponent} from '../../component/main-card/main-card.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    AdminLayoutComponent,
    MainCardComponent
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: '../../style-admin.css'
})
export class AdminDashboardComponent {

}
