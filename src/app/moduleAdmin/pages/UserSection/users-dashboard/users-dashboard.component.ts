import { Component } from '@angular/core';
import {MainCardComponent} from '../../../component/main-card/main-card.component';

@Component({
  selector: 'app-users-dashboard',
  standalone: true,
  imports: [

    MainCardComponent
  ],
  templateUrl: './users-dashboard.component.html',
  styleUrl: './users-dashboard.component.css'
})
export class UsersDashboardComponent {

}
