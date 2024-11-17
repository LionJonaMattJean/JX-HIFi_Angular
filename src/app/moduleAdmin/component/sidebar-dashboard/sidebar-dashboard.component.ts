import { Component } from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';

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
  constructor(private router:Router) {}
  isActive(url:string):boolean {
    return this.router.url === url;
  }
}
