import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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

  getAllProduct(): Observable<Product[]> {
    return of(mockData)
  }

  getAllProductByCategory(idCat: string): Observable<Product[]> {
    const list_productOfCategory = mockData.filter(p => p.category.id === idCat);
    return of(list_productOfCategory)
  }

  getAllProductOnSale(): Observable<Product[]> {
    const list_productOnSale = mockData.filter(p => p.onSale);
    return of(list_productOnSale)
  }

  getProductById(id: string): Observable<Product | undefined> {
   const product:Product|undefined = mockData.find(p => p.id === id);
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

  /*todo Add logic for review */
  calculateMoyenneStarReview(): number {
    // const totalStars = this._reviews.reduce((sum, review) => sum + review.star, 0);
    // return this._reviews.length ? totalStars / this._reviews.length : 0;
    return 4;
  }

  countReview(): number {
    // return this._reviews.length;
    return 21;
  }
}
