import { Component } from '@angular/core';
import {HeaderDashboardComponent} from '../../../component/header-dashboard/header-dashboard.component';
import {MainContainerComponent} from '../../../component/main-container/main-container.component';


@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [
    HeaderDashboardComponent,
    MainContainerComponent

  ],
  templateUrl: './admin-layout.component.html',
  styleUrl: '../../../style-admin.css'
})
export class AdminLayoutComponent {

}
