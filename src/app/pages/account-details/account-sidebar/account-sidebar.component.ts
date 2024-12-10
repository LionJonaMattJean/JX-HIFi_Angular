import { Component } from '@angular/core';
<<<<<<< HEAD
import { RouterLink } from '@angular/router';
=======
import {RouterLink, RouterLinkActive} from '@angular/router';
>>>>>>> dbb0bfdf3282912fe28f320fcc171dcef1e623fd



@Component({
  selector: 'app-account-sidebar',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterLink],
=======
  imports: [
    RouterLink,
    RouterLinkActive
  ],
>>>>>>> dbb0bfdf3282912fe28f320fcc171dcef1e623fd
  templateUrl: './account-sidebar.component.html',
  styleUrl: './account-sidebar.component.css'
})
export class AccountSidebarComponent {




}
