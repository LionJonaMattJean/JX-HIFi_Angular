export class ShortSpecification{
  private _id: string;
  private _title: string;
  private _description: string;
  private static idNumber: number = 101;

  constructor(title: string, description: string){
    this._id = "QSPE" + ShortSpecification.idNumber++;
    this._title = title;
    this._description = description;
  }

  /* setter and getter*/
  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }
}
