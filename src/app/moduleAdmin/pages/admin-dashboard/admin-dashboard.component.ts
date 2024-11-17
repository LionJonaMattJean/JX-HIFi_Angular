import { Component } from '@angular/core';
import {AdminLayoutComponent} from '../layout/admin-layout/admin-layout.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    AdminLayoutComponent
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: '../../style-admin.css'
})
export class AdminDashboardComponent {

}
