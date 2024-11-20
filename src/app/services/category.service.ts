import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { Category } from '../models/Category';
import {mapJsonToCategories} from '../utils/mapping';
import mockData from '../../mockData/mock_json/categories.mock.json';
@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  private dataLink: string = "src/mockData/mock_json/categories.mock.json";


  constructor(private httpRequest: HttpClient) { };

  getCategories(): Observable<Category[]> {
   // return this.httpRequest.get<Category[]>(this.dataLink);
    return of(mapJsonToCategories(mockData))
  }
  getCategory(id: string): Category|undefined   {
    return mapJsonToCategories(mockData).find(category => category.id === id);
  }

}
