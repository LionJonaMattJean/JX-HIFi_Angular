import { Category } from './Category';
import { SpecificationDetails } from './SpecificationDetails';
import { ShortSpecification } from './ShortSpecification';
import { Review } from './Review';
import { Image } from './Image';



export class Product {
  /*todo same type as -id from Category to make SQL request easier ?? */
  private _category: string;
  // private _category: Category;

  private _id: string;
  private _name: string;
  private _description: string;
  private _sellPrice: number;
  private _costPrice: number;
  private _specialPrice: number;
  private _stock: number;
  private _colors: string[];
  private _specificationDetails: SpecificationDetails[];
  private _shortSpecifications: ShortSpecification[];
  // private _reviews: Review[];
  private _images: Image[];
  private _onSale: boolean;
  private static idNumber: number = 100012300000;


  constructor(name: string, description: string, sellPrice: number,
      costPrice: number, stock: number, category: string, colors: string[],
      specificationDetails: SpecificationDetails[], shortSpecifications: ShortSpecification[],
      /*reviews?: Review[],*/ images: Image[]) {
    this._id =  "PRO" + Product.idNumber;
    this._name = name;
    this._description = description;
    this._sellPrice = sellPrice;
    this._costPrice = costPrice;
    this._stock = stock;
    this._category = category;
    this._colors = colors;
    this._specificationDetails = specificationDetails;
    this._shortSpecifications = shortSpecifications;
    // this._reviews = reviews;
    this._images = images;
    this._specialPrice = this._sellPrice;
    this._onSale = false;
    Product.idNumber += 537
  }
  public updateStock(newStock: number) {
    this._stock = newStock;
  }
  public uddatePrice(newPrice: number) {
    this._sellPrice = newPrice;
  }
  public addSpecificationDetail(specificationDetail: SpecificationDetails) {
    this._specificationDetails.push(specificationDetail);
  }
  public addShortSpecification(shortSpecification: ShortSpecification) {
    this._shortSpecifications.push(shortSpecification);
  }
  public addColor(color: string) {
    this._colors.push(color);
  }
  // public addReview(review: Review) {
  //   this._reviews.push(review);
  // }
  public addImage(image: Image) {
    this._images.push(image);
  }
  public addSpecial(percent: number) {
    this._specialPrice = this._sellPrice - (this._sellPrice * percent / 100);
    this._onSale = true;
  }
  public removeSpecial() {
    this._specialPrice = this._sellPrice;
    this._onSale = false;
  }

  /*todo Add logic for review */
  calculateMoyenneStarReview(): number {
    // const totalStars = this._reviews.reduce((sum, review) => sum + review.star, 0);
    // return this._reviews.length ? totalStars / this._reviews.length : 0;
    return 4;
  }

  countReview(): number {
    // return this._reviews.length;
    return 21;
  }


  // getter and setter
  /*todo delete not use or not revelant(duplication)*/


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

  get sellPrice(): number {
    return this._sellPrice;
  }

  set sellPrice(value: number) {
    this._sellPrice = value;
  }

  get costPrice(): number {
    return this._costPrice;
  }

  set costPrice(value: number) {
    this._costPrice = value;
  }

  get specialPrice(): number {
    return this._specialPrice;
  }

  set specialPrice(value: number) {
    this._specialPrice = value;
  }

  get stock(): number {
    return this._stock;
  }

  set stock(value: number) {
    this._stock = value;
  }

  get category(): string {
    return this._category;
  }

  /*todo delete since we cant change cat id from a product ??*/
  // set category(value: Category) {
  //   this._category = value;
  // }

  get colors(): string[] {
    return this._colors;
  }

  set colors(value: string[]) {
    this._colors = value;
  }

  get specificationDetails(): SpecificationDetails[] {
    return this._specificationDetails;
  }

  set specificationDetails(value: SpecificationDetails[]) {
    this._specificationDetails = value;
  }

  get shortSpecifications(): ShortSpecification[] {
    return this._shortSpecifications;
  }

  set shortSpecifications(value: ShortSpecification[]) {
    this._shortSpecifications = value;
  }

  // get reviews(): Review[] {
  //   return this._reviews;
  // }

  // set reviews(value: Review[]) {
  //   this._reviews = value;
  // }

  get images(): Image[] {
    return this._images;
  }

  set images(value: Image[]) {
    this._images = value;
  }
  get onSale(): boolean {
    return this._onSale;
  }
  set onSale(value: boolean) {
    this._onSale = value;
  }
}
