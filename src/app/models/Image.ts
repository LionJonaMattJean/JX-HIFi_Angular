export class Image{
  private _id : string;
  private _idProduct : string;
  private _url: string;
  private static idNumber: number = 310100;


  constructor(idProduct: string, url: string) {
    this._id =  "IMG" + Image.idNumber;
    this._idProduct = idProduct;
    this._url = url;
    Image.idNumber += 3;
  }

/*getter and setter*/
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

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }
}
