import { Component } from '@angular/core';

import {AdminLayoutComponent} from '../layout/admin-layout/admin-layout.component';

@Component({
  selector: 'app-categories-dashboard',
  standalone: true,
  imports: [

    AdminLayoutComponent
  ],
  templateUrl: './categories-dashboard.component.html',
  styleUrl: './categories-dashboard.component.css'
})
export class CategoriesDashboardComponent {

}
