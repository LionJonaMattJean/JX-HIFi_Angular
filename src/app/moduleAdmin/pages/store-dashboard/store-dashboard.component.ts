import { Component } from '@angular/core';
import {AdminLayoutComponent} from '../layout/admin-layout/admin-layout.component';

@Component({
  selector: 'app-store-dashboard',
  standalone: true,
  imports: [
    AdminLayoutComponent
  ],
  templateUrl: './store-dashboard.component.html',
  styleUrl: './store-dashboard.component.css'
})
export class StoreDashboardComponent {

}
