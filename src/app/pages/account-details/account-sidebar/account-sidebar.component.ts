import { Component } from '@angular/core';
import { DisplayInfoComponent } from "../display-info/display-info.component";

@Component({
  selector: 'app-account-sidebar',
  standalone: true,
  imports: [DisplayInfoComponent],
  templateUrl: './account-sidebar.component.html',
  styleUrl: './account-sidebar.component.css'
})
export class AccountSidebarComponent {

}
