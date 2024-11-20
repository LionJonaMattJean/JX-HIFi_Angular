import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { Product } from '../models/Product';
import mockData from '../../mockData/mock_json/products.mock.json';
import {mapJsonToProducts} from '../utils/mapping';
@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  private dataLink: string = "src/mockData/mock_json/products.mock.json";

  constructor(private httpRequest: HttpClient) { };

  getCategories(): Observable<Product[]> {
    return this.httpRequest.get<Product[]>(this.dataLink);
  }
  getProducts(): Observable<Product[]> {
    let products = mapJsonToProducts(mockData)
    return of(products)
  }
}
