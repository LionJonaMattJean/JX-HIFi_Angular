import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {SpecificationDetails} from '../models/SpecificationDetails';

@Injectable({
  providedIn: 'root'
})
export class SpecificationDetailsService {
  private static idNumber: number = 1;
  private spec: SpecificationDetails[]=[];

  constructor() {
    this.getSpecificationDetails().subscribe((specs)=>{
      const temp=specs[specs.length-1].id;
      SpecificationDetailsService.idNumber=parseInt(temp.substring(3),10)+1;
    })
  }


  getSpecificationDetails(): Observable<SpecificationDetails[]> {
    return of(this.spec)
  }
}
