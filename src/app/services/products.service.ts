import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, map, Observable, of} from 'rxjs';
import { Product } from '../models/Product';




@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  private url:string="http://localhost:8080";
  list_productFromCustomSearch: Product[] = [];
  allProducts: Product[] =[];
  constructor(private httpRequest: HttpClient) {};

  searchProducts(query:string): Observable<Product[]> {
    if (!query.trim()) {
      return of([]); // Return empty array if the query is empty
    }

    return this.getAllProduct().pipe(
      map((products) =>
        products.filter((product) =>
          product.name.toLowerCase().includes(query.toLowerCase()),

        )
      ),
      catchError((error) => {
        console.error('Error fetching mock products:', error);
        return of([]); // Return empty array in case of an error
      })
    );
  }
  getProductsForAutoComplete(): Observable<Product[]> {
    return this.httpRequest.get<Product[]>(this.url+"/products-search");
  }
  getAllProduct(): Observable<Product[]> {
    return this.httpRequest.get<Product[]>(this.url+"/products");
  }

  getAllProductTable(): Observable<Product[]> {
    return this.httpRequest.get<Product[]>(this.url+"/table/products");
  }
  getAllProductByBrand(idBrand: string): Observable<Product[]> {
    return this.httpRequest.get<Product[]>(this.url+"/products/brand/"+idBrand);
  }
  getAllProductByCategory(idCat: string): Observable<Product[]> {
    return this.httpRequest.get<Product[]>(this.url+"/products/category/"+idCat);

  }
  createProduct(product: Product): Observable<Product> {
    return this.httpRequest.post<Product>(this.url+"/products/create", product);
  }
  updateProduct(payload: any,id:string):Observable<Product> {
    return this.httpRequest.put<Product>(this.url+"/products/modify/"+id, payload);

  }
  deleteProduct(id:string):Observable<Product> {
    return this.httpRequest.delete<Product>(this.url+"/products/delete/"+id);
  }
/*
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
*/
  getAllProductByKeyword(keyword: string) {
    const keywordToLower = keyword.toLocaleLowerCase(); // Convert the keyword to lowercase
    this.getAllProduct().subscribe({
      next: (products) => {
        this.allProducts = products;
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      },
      complete: () => {
        console.log('Fetched all products:', this.allProducts);
      }
    })
    // Filter on the client side based on the keyword
    this.list_productFromCustomSearch = this.allProducts.filter(product =>
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

    return of(this.list_productFromCustomSearch)
  }
  getAllProductOnSale(): Observable<Product[]> {

    return this.httpRequest.get<Product[]>(this.url+"/products/onSale");
  }

  getProductById(id: string): Observable<Product | undefined> {
    return this.httpRequest.get<Product>(this.url+"/products/"+id);
  }

  calculateMoyenneStarReview(productId: string): Observable<number> {
    return this.getProductById(productId).pipe(
      map((product) => {
        if (product && product.reviews && product.reviews.length > 0) {
          const totalStars = product.reviews.reduce((sumStars, review) => sumStars + review.star, 0);
          return totalStars / product.reviews.length;
        }
        return 0; // Return 0 if reviews are not available
      }),
      catchError((error) => {
        console.error('Failed to fetch product:', error);
        return of(0); // Return 0 in case of an error
      })
    );
  }


}
