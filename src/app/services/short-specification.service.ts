import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {ShortSpecification} from '../models/ShortSpecification';

@Injectable({
  providedIn: 'root'
})
export class ShortSpecificationService {
  static idNumber: number = 1;
  shortSpec: ShortSpecification[]=[];

  constructor() {
    this.getShortSpecifications().subscribe((specs)=>{
      const temp=specs[specs.length-1].id;
      ShortSpecificationService.idNumber=parseInt(temp.substring(4),10)+1;
    })
  }


  getShortSpecifications(): Observable<ShortSpecification[]>{
    return of(this.shortSpec)
  }
}
