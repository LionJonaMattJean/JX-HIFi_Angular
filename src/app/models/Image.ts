export class Image{
  private _id : string;
  private _idProduct : string;
  private _url : string;


  constructor(id: string, idProduct: string, url: string) {
    this._id = id;
    this._idProduct = idProduct;
    this._url = url;
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
