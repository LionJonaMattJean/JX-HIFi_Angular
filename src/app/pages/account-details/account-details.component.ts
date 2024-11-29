import { Component } from '@angular/core';
import { AccountSidebarComponent } from './account-sidebar/account-sidebar.component';
import { DisplayInfoComponent } from './display-info/display-info.component';

@Component({
  selector: 'app-account-details',
  standalone: true,
  imports: [AccountSidebarComponent, DisplayInfoComponent],
  templateUrl: './account-details.component.html',
  styleUrl: './account-details.component.css'
})
export class AccountDetailsComponent {

}
