import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Category } from '../models/Category';
import mockData from '../../mockData/mock_json/categories.mock.json';
import {catchError, map, Observable, of, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  private static idNumber: number;

  constructor(private httpRequest: HttpClient,) {
    this.getCategories().subscribe(categories => {
      const temp = categories[categories.length - 1].id;
      CategoryService.idNumber = parseInt(temp.substring(3), 10) + 111;
    });
  };

  getCategories(): Observable<Category[]> {
    // return this.httpRequest.get<Category[]>(this.dataLink);
    return of(mockData)
  }

  getCategoryById(id: string): Observable<Category> {
   return this.getCategories().pipe(
      map((categories: Category[]) => {
        const category = categories.find(category => category.id === id);
        if (!category) {
          throw new Error(`Category with id ${id} not found`);
        }
        return category;
      }),
      catchError(error => {
        console.error(error);
        return throwError(() => new Error(`Error fetching category with id ${id}: ${error.message}`));
      })
    );

  }

  generateId(): string {
    const id = "CAT" + CategoryService.idNumber
    CategoryService.idNumber += 111;
    return id;
  }

}
