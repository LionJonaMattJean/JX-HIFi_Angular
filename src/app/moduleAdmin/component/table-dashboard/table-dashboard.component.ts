import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForOf } from '@angular/common';
import { ActionLinkDashboardComponent } from '../action-link-dashboard/action-link-dashboard.component';


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
  @Input() dataBinding: any[] = [];
  @Input() displayColumns: string[] = [];
  @Input() id!: string;
  @Input() columnNames: { [key: string]: string } = {};
  @Input() entityType!: string;
  @Output() editEvent = new EventEmitter<string>();
  @Output() deleteEvent = new EventEmitter<string>();
  @Output() detailsEvent = new EventEmitter<string>();



  constructor() {

  }
  /**
   * Safely retrieves the value of a column for the provided row.
   *
   * @param row The data row
   * @param column The column name
   * @returns The value of the column, or a fallback/empty value if undefined
   */
  getColumnValue(row: any, column: string): any {
    if (!row) {
      return ''; // Handle cases where the row itself is undefined or null
    }
    if (column === 'category') {
      return row.categoryId || 'N/A'; // Safely navigate 'category' and provide fallback
    } else if (column === 'address') {
      const address: string[] = [
        row.address?.address,
        row.address?.city,
        row.address?.postalCode,
        row.address?.province,
        row.address?.country
      ].filter((addr) => addr); // Ignore undefined parts of the address
      return address.join(', ');
    } else if (column === 'role') {
      const choix = row.role;
      let name;
      switch (choix) {
        case 'administrator':
          name = 'Administrateur';
          break;
        case 'customer':
          name = 'Client';
          break;
        case 'saleagent':
          name = 'Agent de vente';
          break;
        default:
          name = choix || 'N/A'; // Provide fallback
      }
      return name;
    } else if (column === 'status') {
      const choix = row.status;
      let name;
      //TODO Adapté les valeur de status pour fitter avec les status determiner par Matt
      switch (choix) {
        case 'Pending':
          name = 'En attente';
          break;
        case 'Processing':
          name = 'En cours de traitement';
          break;
        case 'Completed':
          name = 'Terminé';
          break;
        case 'Canceled':
          name = 'Annulé';
          break;
        default:
          name = choix || 'N/A'; // Provide fallback
      }
      return name;
    } else if (column === 'orderDate') {
      const date = row.orderDate;
      if (!date || !Array.isArray(date)) return 'N/A'; // Handle cases where date is undefined
      return `${date[2]}/${date[1]}/${date[0]}`;
    } else {
      return row[column] || 'N/A'; // Fallback for any generic case
    }
  }

  /**
   * Emits the edit event for the row with the given ID.
   *
   * @param id The ID of the row
   */
  onEdit(id: string) {
    const row = this.dataBinding.find((item) => item?.id === id);
    this.editEvent.emit(row);
  }

  /**
   * Emits the details event for the row with the given ID.
   *
   * @param id The ID of the row
   */
  onDetails(id: string) {
    const row = this.dataBinding.find((item) => item?.id === id);
    this.detailsEvent.emit(row);
  }

  /**
   * Emits the delete event for the row with the given ID.
   *
   * @param id The ID of the row
   */
  onDelete(id: string) {
    const row = this.dataBinding.find((item) => item?.id === id);
    this.deleteEvent.emit(row);
  }
}