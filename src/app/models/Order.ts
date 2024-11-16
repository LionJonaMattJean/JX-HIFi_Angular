import {Customer} from './Customer';
import {OrderItem} from './OrderItem';
import {Address} from './Address';
import {Card} from './Card';

export class Order{
  private _id: string;
  private _customer: Customer;
  private _card: Card;
  private _orderItems: OrderItem[];
  private _totalAmount: number;
  private static _TPS: number = 0.05;
  private static _TaxeState: number = 0.09975;
  private _TTC: number;
  private _status: string;
  private _orderDate: Date;
  private _shippingAddress: Address;


  constructor(id: string, customer: Customer, card: Card, orderItems: OrderItem[], totalAmount: number, TTC: number, status: string, orderDate: Date, shippingAddress: Address) {
    this._id = id;
    this._customer = customer;
    this._card = card;
    this._orderItems = orderItems;
    this._totalAmount = totalAmount;
    this._TTC = TTC;
    this._status = status;
    this._orderDate = orderDate;
    this._shippingAddress = shippingAddress;
  }
/*function todo remove not important and implement correctly*/
  calculateTotal(){
    const tax =this._totalAmount*(Order.TPS+Order.TaxeState);
    return this._totalAmount+tax;
  }
  updateStatus(newStatus: string): void {
    this.status = newStatus;
  }




  /*Setter getter todo remove not important*/

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get customer(): Customer {
    return this._customer;
  }

  set customer(value: Customer) {
    this._customer = value;
  }

  get card(): Card {
    return this._card;
  }

  set card(value: Card) {
    this._card = value;
  }

  get orderItems(): OrderItem[] {
    return this._orderItems;
  }

  set orderItems(value: OrderItem[]) {
    this._orderItems = value;
  }

  get totalAmount(): number {
    return this._totalAmount;
  }

  set totalAmount(value: number) {
    this._totalAmount = value;
  }

  static get TPS(): number {
    return this._TPS;
  }

  static set TPS(value: number) {
    this._TPS = value;
  }

  static get TaxeState(): number {
    return this._TaxeState;
  }

  static set TaxeState(value: number) {
    this._TaxeState = value;
  }

  get TTC(): number {
    return this._TTC;
  }

  set TTC(value: number) {
    this._TTC = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }

  get orderDate(): Date {
    return this._orderDate;
  }

  set orderDate(value: Date) {
    this._orderDate = value;
  }

  get shippingAddress(): Address {
    return this._shippingAddress;
  }

  set shippingAddress(value: Address) {
    this._shippingAddress = value;
  }


}
