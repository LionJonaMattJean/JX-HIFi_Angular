import { Injectable } from '@angular/core';
import { Card } from '../models/Card';
import { map, Observable, of } from 'rxjs';
import mockdata from '../../mockData/mock_json/card.mock.json'

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }
   validate(): void {
    // Add validation logic here
  }

  getCards():Observable<Card[]>{
    return of(mockdata);
  }

  getCardById(id:string):Observable<Card>{
    return this.getCards().pipe(
    map(card => card.find(card => card.id === id)!)
   )
  }

   save(): void {
    // Add save logic here
  }

   delete(): void {
    // Add delete logic here
  }

   update(id: string, cardNumber: number, experieringDate: Date, paiementMethod: string, cvc: number, nameHolder: string): void {
    /* this.id = id;
     this.cardNumber = cardNumber;
     this.experieringDate = experieringDate;
     this.paiementMethod = paiementMethod;
     this.cvc = cvc;
     this.nameHolder = nameHolder;
     */

  }
}
