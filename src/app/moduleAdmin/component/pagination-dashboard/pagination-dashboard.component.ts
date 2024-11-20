import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-pagination-dashboard',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './pagination-dashboard.component.html',
  styleUrl: './pagination-dashboard.component.css'
})
export class PaginationDashboardComponent implements OnInit,OnChanges {
  @Input() totalItems: number = 0;
  @Input() itemsPerPage: number = 10;
  @Input() currentPage: number = 1;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  totalPages: number = 0;
constructor() {}
  ngOnInit() {
    this.calculateTotalPages();
  }
  ngOnChanges() {
    this.calculateTotalPages();
  }
  calculateTotalPages() {
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
  }
  onPageClick(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.pageChange.emit(this.currentPage);  // Update the page number to the parent component

  }
}
