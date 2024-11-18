import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/Category';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  private dataLink: string = "src\mockData\mock_json\categories.mock.json";

  constructor(private httpRequest: HttpClient) { };

  getCategories(): Observable<Category[]> {
    return this.httpRequest.get<Category[]>(this.dataLink);
  }
}
