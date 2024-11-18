export class Category {
  private _id: string;
  private _name: string;
  private _description: string;
  private static idNumber: number = 111;


  constructor(name: string, description: string /*, products: Product[]*/) {
    this._id =  "CAT" + Category.idNumber;
    this._name = name;
    this._description = description;
    Category.idNumber += 111;

  }

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
}
