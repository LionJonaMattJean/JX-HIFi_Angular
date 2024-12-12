import { Component } from '@angular/core';
import { AccountSidebarComponent } from './account-sidebar/account-sidebar.component';
import { RouterOutlet } from '@angular/router';




@Component({
  selector: 'app-account-details',
  standalone: true,
  imports: [AccountSidebarComponent, RouterOutlet],
  templateUrl: './account-details.component.html',
  styleUrl: './account-details.component.css'
})
export class AccountDetailsComponent {



}
