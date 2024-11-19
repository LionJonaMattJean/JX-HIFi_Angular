import { Component } from '@angular/core';

import {AdminLayoutComponent} from '../layout/admin-layout/admin-layout.component';
import {MainCardComponent} from '../../component/main-card/main-card.component';

@Component({
  selector: 'app-categories-dashboard',
  standalone: true,
  imports: [

    AdminLayoutComponent,
    MainCardComponent
  ],
  templateUrl: './categories-dashboard.component.html',
  styleUrl: './categories-dashboard.component.css'
})
export class CategoriesDashboardComponent {

}
