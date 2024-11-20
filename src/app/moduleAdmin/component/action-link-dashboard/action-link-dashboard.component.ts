import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-action-link-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './action-link-dashboard.component.html',
  styleUrl: './action-link-dashboard.component.css'
})
export class ActionLinkDashboardComponent {
  @Input() id!: string; // Item ID
  @Output() modifyEvent = new EventEmitter<string>();
  @Output() detailsEvent = new EventEmitter<string>();
  @Output() deleteEvent = new EventEmitter<string>();


  onEditClick() {
    this.modifyEvent.emit(this.id);
  }

  onDetailsClick() {
    this.detailsEvent.emit(this.id);
  }

  onDeleteClick() {
    this.deleteEvent.emit(this.id);
  }
}
