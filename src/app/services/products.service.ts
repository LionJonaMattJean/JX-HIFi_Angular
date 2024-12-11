import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, map, Observable, of} from 'rxjs';
import { Product } from '../models/Product';
import mockData from '../../mockData/mock_json/products.mock.json';


@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  private url:string="http://localhost:8080";
  constructor(private httpRequest: HttpClient) {};

  searchProducts(query:string): Observable<Product[]> {
    if (!query.trim()) {
      return of([]); // Return empty array if the query is empty
    }

    return this.getAllProduct().pipe(
      map((products) =>
        products.filter((product) =>
          product.name.toLowerCase().includes(query.toLowerCase())
        )
      ),
      catchError((error) => {
        console.error('Error fetching mock products:', error);
        return of([]); // Return empty array in case of an error
      })
    );
  }

  getAllProduct(): Observable<Product[]> {
    return this.httpRequest.get<Product[]>(this.url+"/products");
  }

  getAllProductByCategory(idCat: string): Observable<Product[]> {
    return this.httpRequest.get<Product[]>(this.url+"/products/category/"+idCat);

  }
  createProduct(product: Product): Observable<Product> {
    return this.httpRequest.post<Product>(this.url+"/products/create", product);
  }

  getAllProductByKeyword(keyword: string) {
    const keywordToLower = keyword.toLocaleLowerCase();

    const list_productFromCustomSearch = mockData.filter(product =>

      product.name.toLocaleLowerCase().includes(keywordToLower) ||
      product.description.toLocaleLowerCase().includes(keywordToLower) ||
      product.brand.toLocaleLowerCase().includes(keywordToLower) ||
      product.category.name.toLocaleLowerCase().includes(keywordToLower) ||
      product.category.description.toLocaleLowerCase().includes(keywordToLower) ||

      product.specificationDetails.some(spec =>
        spec.title.toLocaleLowerCase().includes(keywordToLower) ||
        spec.description.toLocaleLowerCase().includes(keywordToLower)
      ) ||

      product.reviews.some(review =>
        review.title.toLocaleLowerCase().includes(keywordToLower) ||
        review.review.toLocaleLowerCase().includes(keywordToLower)
      )
    );

    return of(list_productFromCustomSearch)
  }

  getAllProductOnSale(): Observable<Product[]> {
   // const list_productOnSale = mockData.filter(p => p.onSale);
   // return of(list_productOnSale)
    return this.httpRequest.get<Product[]>(this.url+"/products/onSale");
  }

  getProductById(id: string): Observable<Product | undefined> {
    return this.httpRequest.get<Product>(this.url+"/products/"+id);
  }

  calculateMoyenneStarReview(productId: string): number {
    const product: Product | undefined = mockData.find(p => p.id === productId);
    if (product && product.reviews && product.reviews.length > 0) {
      const totalStars = product.reviews.reduce((sumStars, review) => sumStars + review.star, 0);
      return totalStars / product.reviews.length;
    }
    return 0;
  }
}
