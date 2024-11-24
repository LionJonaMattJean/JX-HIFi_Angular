import { Component } from '@angular/core';
import {MainCardComponent} from '../../../component/main-card/main-card.component';

@Component({
  selector: 'app-store-dashboard',
  standalone: true,
  imports: [

    MainCardComponent
  ],
  templateUrl: './store-dashboard.component.html',
  styleUrl: './store-dashboard.component.css'
})
export class StoreDashboardComponent {

}
