export class Card {
  id: string;
  cardNumber: number;
  experieringDate: Date;
  paiementMethod: string;
  cvc: number;
  nameHolder: string;

  constructor(id: string, cardNumber: number, experieringDate: Date, paiementMethod: string, cvc: number, nameHolder: string) {
    this.id = id;
    this.cardNumber = cardNumber;
    this.experieringDate = experieringDate;
    this.paiementMethod = paiementMethod;
    this.cvc = cvc;
    this.nameHolder = nameHolder;
  }
/*todo add few other function in the card class */
  public validate(): void {
    // Add validation logic here
  }

  public save(): void {
    // Add save logic here
  }

  public delete(): void {
    // Add delete logic here
  }

  public update(id: string, cardNumber: number, experieringDate: Date, paiementMethod: string, cvc: number, nameHolder: string): void {
    this.id = id;
    this.cardNumber = cardNumber;
    this.experieringDate = experieringDate;
    this.paiementMethod = paiementMethod;
    this.cvc = cvc;
    this.nameHolder = nameHolder;
  }


}
