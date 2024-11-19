import { Component } from '@angular/core';
import {AdminLayoutComponent} from '../layout/admin-layout/admin-layout.component';
import {MainCardComponent} from '../../component/main-card/main-card.component';

@Component({
  selector: 'app-users-dashboard',
  standalone: true,
  imports: [
    AdminLayoutComponent,
    MainCardComponent
  ],
  templateUrl: './users-dashboard.component.html',
  styleUrl: './users-dashboard.component.css'
})
export class UsersDashboardComponent {

}
