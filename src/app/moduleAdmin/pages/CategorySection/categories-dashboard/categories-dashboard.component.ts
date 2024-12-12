import { Component } from '@angular/core';


import {MainCardComponent} from '../../../component/main-card/main-card.component';

@Component({
  selector: 'app-categories-dashboard',
  standalone: true,
  imports: [

    MainCardComponent
  ],
  templateUrl: './categories-dashboard.component.html',
  styleUrl: './categories-dashboard.component.css'
})
export class CategoriesDashboardComponent {

}
