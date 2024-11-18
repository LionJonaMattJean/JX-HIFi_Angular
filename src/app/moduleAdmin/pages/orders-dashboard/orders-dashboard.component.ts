import { Component } from '@angular/core';
import {AdminLayoutComponent} from "../layout/admin-layout/admin-layout.component";

@Component({
  selector: 'app-orders-dashboard',
  standalone: true,
    imports: [
        AdminLayoutComponent
    ],
  templateUrl: './orders-dashboard.component.html',
  styleUrl: './orders-dashboard.component.css'
})
export class OrdersDashboardComponent {

}
