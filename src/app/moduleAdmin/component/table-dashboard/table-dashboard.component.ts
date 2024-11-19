import {Component, EventEmitter, Input, Output, output} from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-table-dashboard',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './table-dashboard.component.html',
  styleUrl: '../../style-admin.css'
})
export class TableDashboardComponent {
@Input() dataBinding: any[]=[];
@Input() displayColumns: string[]=[];

@Output() editEvent=new EventEmitter<any>();
@Output() deleteEvent=new EventEmitter<any>();
@Output() viewEvent=new EventEmitter<any>();


  constructor() { }

  onEditClick(row: any){
    this.editEvent.emit(row);
  }

  onDeleteClick(row: any){
    this.deleteEvent.emit(row);
  }

  onDetailsClick(row: any){
    this.viewEvent.emit(row);
  }
}
