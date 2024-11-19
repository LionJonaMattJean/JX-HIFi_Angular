import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
  
export class ProductsService {
  private dataLink: string = "src/mockData/mock_json/products.mock.json";

  constructor(private httpRequest: HttpClient) { };

  getCategories(): Observable<Product[]> {
    return this.httpRequest.get<Product[]>(this.dataLink);
  }
}
