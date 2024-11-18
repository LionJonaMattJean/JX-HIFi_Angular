import { Component } from '@angular/core';
import {AdminLayoutComponent} from '../layout/admin-layout/admin-layout.component';

@Component({
  selector: 'app-users-dashboard',
  standalone: true,
  imports: [
    AdminLayoutComponent
  ],
  templateUrl: './users-dashboard.component.html',
  styleUrl: './users-dashboard.component.css'
})
export class UsersDashboardComponent {

}
