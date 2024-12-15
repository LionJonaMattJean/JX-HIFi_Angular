import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-action-link-dashboard',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './action-link-dashboard.component.html',
  styleUrl: './action-link-dashboard.component.css'
})
export class ActionLinkDashboardComponent {
  @Input() id!: string; // Item ID
  @Input() entityType!: string;

  adminLink = '/admin';
  customerLink = '/customer';

  verififyEntity(entityType:string):string {
  if (entityType === 'customer'|| entityType === 'admin') {
    if (entityType === 'admin') {
      return this.adminLink;
    }else if (entityType === 'customer'){
      return this.customerLink;
    }else
      return '';
  } else {
    return this.entityType;
  }
}

}
