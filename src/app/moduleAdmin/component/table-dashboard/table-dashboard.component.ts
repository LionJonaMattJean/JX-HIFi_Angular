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
  getColumnValue(row: any, column: string): any {
    if (column === 'category') {
      return row.category.id;
    } else if (column === 'address') {
      const address:String[]= [row.address.address,row.address.postalCode,row.address.province];
      return address.join(" , ")

    }else if(column==='role'){
      const choix = row.role;
      let name: string='';
      switch (choix) {
        case 'administrator' :
          name = 'Administrateur';
          break;
        case'customer':
          name = 'Client';
          break;
        case 'saleagent':
          name = 'Agent de vente';
          break;
      }
      return name;
    }else if(column==='status'){
      const choix = row.status;
      let name: string='';
      switch (choix) {
        case 'Pending' :
          name = 'En attente';
          break;
        case'Processing':
          name = 'En cours de traitement';
          break;
        case 'Completed':
          name = 'Terminé';
          break;
        case 'Canceled':
          name = 'Annulé';
          break;
      }
      return name;
    }else if(column==='orderDate'){
      const date = row.orderDate;
      return [date.day,date.month,date.year].join('/');
    }else if(column==='totalItems'){
      return row.orderItems.length;
    }
     else {
      return row[column];
    }
  }
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
