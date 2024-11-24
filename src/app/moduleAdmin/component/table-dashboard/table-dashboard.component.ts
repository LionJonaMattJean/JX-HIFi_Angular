import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForOf} from '@angular/common';
import {ActionLinkDashboardComponent} from '../action-link-dashboard/action-link-dashboard.component';

@Component({
  selector: 'app-table-dashboard',
  standalone: true,
  imports: [
    NgForOf,
    ActionLinkDashboardComponent
  ],
  templateUrl: './table-dashboard.component.html',
  styleUrl: '../../style-admin.css'
})
export class TableDashboardComponent {
@Input() dataBinding: any[]=[];
@Input() displayColumns: string[]=[];
@Input() id!:string;
@Input() columnNames: { [key: string]: string } = {};
@Input() entityType!: string;
@Output() editEvent=new EventEmitter<string>();
@Output() deleteEvent=new EventEmitter<string>();
@Output() detailsEvent=new EventEmitter<string>();



  constructor() { }

  onEdit(id: string) {
    const row = this.dataBinding.find((item) => item.id === id);
    this.editEvent.emit(row);

  }

  onDetails(id: string) {
    const row = this.dataBinding.find((item) => item.id === id);
    this.detailsEvent.emit(row);

  }

  onDelete(id: string) {
    const row = this.dataBinding.find((item) => item.id === id);
    this.deleteEvent.emit(row);
  }
}
