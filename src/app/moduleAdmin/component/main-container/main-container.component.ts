import { Component } from '@angular/core';
import {SidebarDashboardComponent} from '../sidebar-dashboard/sidebar-dashboard.component';
import {OffCanevaDashboardComponent} from '../off-caneva-dashboard/off-caneva-dashboard.component';


import {MainCardComponent} from '../main-card/main-card.component';

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [
    SidebarDashboardComponent,
    OffCanevaDashboardComponent,
    MainCardComponent
  ],
  templateUrl: './main-container.component.html',
  styleUrl: '../../style-admin.css'
})
export class MainContainerComponent {

}
