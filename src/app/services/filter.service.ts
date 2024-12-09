import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Filters } from '../models/Filter';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private filtersObject = new BehaviorSubject<Filters>({
    brands: [],
    colors: [],
    minPrice: null,
    maxPrice: null
  });

  filters$ = this.filtersObject.asObservable();

  updateFilters(filters: Filters) {
    this.filtersObject.next(filters);
  }

  getFilters() {
    return this.filtersObject.getValue();
  }
}
