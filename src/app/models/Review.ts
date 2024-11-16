export class Review{
  private _id: string;
  private _idProduct: string;
  private _idUser: string;
  private _star: number;
  private _title: string;
  private _review: string;


  constructor(id: string, idProduct: string, idUser: string, star: number, title: string, review: string) {
    this._id = id;
    this._idProduct = idProduct;
    this._idUser = idUser;
    this._star = star;
    this._title = title;
    this._review = review;
  }

  /*setter and getter methods for the properties of the class*/

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get idProduct(): string {
    return this._idProduct;
  }

  set idProduct(value: string) {
    this._idProduct = value;
  }

  get idUser(): string {
    return this._idUser;
  }

  set idUser(value: string) {
    this._idUser = value;
  }

  get star(): number {
    return this._star;
  }

  set star(value: number) {
    this._star = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get review(): string {
    return this._review;
  }

  set review(value: string) {
    this._review = value;
  }
}
