import {Component} from '@angular/core';
import {MainCardComponent} from '../../../component/main-card/main-card.component';
import {RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-products-dashboard',
  standalone: true,
  imports: [

    MainCardComponent,
    RouterOutlet,

  ],
  templateUrl: './products-dashboard.component.html',
  styleUrl: './products-dashboard.component.css'
})
export class ProductsDashboardComponent {

}
