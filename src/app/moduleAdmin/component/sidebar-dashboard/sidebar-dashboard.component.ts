import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-sidebar-dashboard',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidebar-dashboard.component.html',
  styleUrl: '../../style-admin.css'
})
export class SidebarDashboardComponent {
  constructor() {}

}
