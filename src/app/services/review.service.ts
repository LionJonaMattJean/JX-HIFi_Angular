import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Review} from '../models/Review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  static idNumber: number = 1130000;
  reviews:Review[] = [];
  constructor() {
    this.getReviews().subscribe(reviews=>{
      const temp=reviews[reviews.length-1].id
      ReviewService.idNumber=parseInt(temp.substring(3),10)+1;
    })
  }

  getReviews():Observable<Review[]>{
    return of(this.reviews);
  }
}
