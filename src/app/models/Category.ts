
/*todo determine if the Product Class is really necessary in Category ??*/

// import {Product} from './Product';

export class Category {
  private _id: string;
  private _name: string;
  private _description: string;
  private static idNumber: number = 111;
  // private _products: Product[];

  constructor(name: string, description: string /*, products: Product[]*/) {
    this._id =  "CAT" + Category.idNumber;
    this._name = name;
    this._description = description;
    Category.idNumber += 111;
    // this._products = products;
  }

  // public addProduct(product: Product): void {
  //     this._products.push(product);
  // }
  // public removeProduct(productId: string): void {
  //     this._products = this._products.filter(product => product.id !== productId);
  // }


  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  // get products(): Product[] {
  //   return this._products;
  // }

  // set products(value: Product[]) {
  //   this._products = value;
  // }
}
