import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/Category';

import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  private url:string="http://localhost:8080";
  constructor(private httpRequest: HttpClient,) {
  };

  getCategories(): Observable<Category[]> {
    return this.httpRequest.get<Category[]>(this.url+"/categories");
   // return of(mockData)
  }

  getCategoryById(id: string): Observable<Category> {
   return this.httpRequest.get<Category>(this.url+"/categories/"+id);
  }
  createNewCategory(category: Category): Observable<Category> {
    return this.httpRequest.post<Category>(this.url+"/categories/create", category);
  }

  deleteCategory(id: string) {
    return this.httpRequest.delete(this.url+"/categories/delete/"+id);
  }
  updateCategory(category: Category) {
    return this.httpRequest.put(this.url+"/categories/modify", category);
  }
}
