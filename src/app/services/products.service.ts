import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, map, Observable, of} from 'rxjs';
import { Product } from '../models/Product';
import mockData from '../../mockData/mock_json/products.mock.json';

import { SpecificationDetails } from '../models/SpecificationDetails';
import { ShortSpecification } from '../models/ShortSpecification';
import { Image } from '../models/Image';
import { listProducts } from '../../mockData/mock_ts/mock-products';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  private dataLink: string = "src/mockData/mock_json/products.mock.json";
  private static idNumber: number = 100012300000;
  constructor(private httpRequest: HttpClient) {
    // this.getProducts().subscribe((products) => {
    //   const temp = products[products.length - 1].id;
    //   ProductsService.idNumber = parseInt(temp.substring(3), 10) + 537;
    // });
  };

  // getCategories(): Observable<Product[]> {
  //   return this.httpRequest.get<Product[]>(this.dataLink);
  // }
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
    return of(mockData)
  }

  getAllProductByCategory(idCat: string): Observable<Product[]> {
    const list_productOfCategory = mockData.filter(p => p.category.id === idCat);
    return of(list_productOfCategory)
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
    const list_productOnSale = mockData.filter(p => p.onSale);
    return of(list_productOnSale)
  }

  getProductById(id: string): Observable<Product | undefined> {
    const product: Product | undefined = mockData.find(p => p.id === id);
    return of(product);
  }

  /* public updateStock(newStock: number) {
     this._stock = newStock;
   }
   public updatePrice(newPrice: number) {
     this._sellPrice = newPrice;
   }
   public addSpecificationDetail(specificationDetail: SpecificationDetails) {
     this._specificationDetails.push(specificationDetail);
   }
   public addShortSpecification(shortSpecification: ShortSpecification) {
     this._shortSpecifications.push(shortSpecification);
   }
   public addColor(color: string) {
     this._colors.push(color);
   }
   // public addReview(review: Review) {
   //   this._reviews.push(review);
   // }
   public addImage(image: Image) {
     this.images.push(image);
   }
   public addSpecial(percent: number) {
     this._specialPrice = this._sellPrice - (this._sellPrice * percent / 100);
     this._onSale = true;
   }
   public removeSpecial() {
     this.specialPrice = this._sellPrice;
     this._onSale = false;
   }*/

  
  calculateMoyenneStarReview(productId: string): number {
    const product: Product | undefined = mockData.find(p => p.id === productId);
    if (product && product.reviews && product.reviews.length > 0) {
      const totalStars = product.reviews.reduce((sumStars, review) => sumStars + review.star, 0);
      return totalStars / product.reviews.length;
    }
    return 0;
  }
}
