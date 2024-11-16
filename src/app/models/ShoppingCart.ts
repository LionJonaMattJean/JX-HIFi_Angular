import {Customer} from './Customer';
import {OrderItem} from './OrderItem';

export class ShoppingCart{
  private static _instance:ShoppingCart;
  private _customer:Customer;
  private _cartItems:OrderItem[] = [];
  private _total:number = 0;

  private constructor(customer:Customer){
    this._customer = customer;
  }

  public static getInstance(customer:Customer):ShoppingCart{
    if(!this._instance){
      this._instance = new ShoppingCart(customer);
    }
    return this._instance;
  }

  public addItem(orderItem:OrderItem){
    this._cartItems.push(orderItem);
    this.calculateTotal();
  }

  public removeItem(orderItemId:string){
    this._cartItems = this._cartItems.filter(item => item.id !== orderItemId);
    this.calculateTotal();
  }

  public updateItemQuantity(orderItemId:string, newQuantity:number){
    const item= this._cartItems.find(item => item.id === orderItemId);
    if(!item) return; //todo throw error or log, item not found in user interface
    item.quantity = newQuantity;
    this.calculateTotal();
  }

  public calculateTotal(){
    this._total = this._cartItems.reduce((acc, item) => acc + item.subTotal, 0);
  }

  public clearCart(){
    this._cartItems = [];
    this.calculateTotal();
  }
  public checkout(){
    //todo implement checkout logic
    //create order and add to customer order history
    //clear cart
    //update stock
    //use front end framework to display success message
    //use front end framework to display error message
    //use front end framework to get user input for creating order
  }
 /*setter getter
 * todo remove what is duplicate*/


  static get instance(): ShoppingCart {
    return this._instance;
  }

  static set instance(value: ShoppingCart) {
    this._instance = value;
  }

  get customer(): Customer {
    return this._customer;
  }

  set customer(value: Customer) {
    this._customer = value;
  }

  get cartItems(): OrderItem[] {
    return this._cartItems;
  }

  set cartItems(value: OrderItem[]) {
    this._cartItems = value;
  }

  get total(): number {
    return this._total;
  }

  set total(value: number) {
    this._total = value;
  }
}
