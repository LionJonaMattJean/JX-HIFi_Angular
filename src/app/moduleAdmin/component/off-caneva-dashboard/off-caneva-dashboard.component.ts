import { Component } from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-off-caneva-dashboard',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './off-caneva-dashboard.component.html',
  styleUrl: '../../style-admin.css'
})
export class OffCanevaDashboardComponent {
  constructor(private router:Router) {}

  isActive(url:string):boolean {
    return this.router.url === url;
  }
}
