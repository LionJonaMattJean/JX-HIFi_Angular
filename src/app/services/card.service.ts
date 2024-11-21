import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }
   validate(): void {
    // Add validation logic here
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
