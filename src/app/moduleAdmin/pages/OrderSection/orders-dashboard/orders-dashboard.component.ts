import { Component } from '@angular/core';
import {MainCardComponent} from '../../../component/main-card/main-card.component';


@Component({
  selector: 'app-orders-dashboard',
  standalone: true,
  imports: [

    MainCardComponent

  ],
  templateUrl: './orders-dashboard.component.html',
  styleUrl: './orders-dashboard.component.css'
})
export class OrdersDashboardComponent {

}
