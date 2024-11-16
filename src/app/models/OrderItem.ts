import {Product} from './Product';

export class OrderItem{
  id:string;
  product:Product;
  quantity:number;
  subTotal:number=0;

  constructor(id:string, product:Product, quantity:number){
    this.id = id;
    this.product = product;
    this.quantity = quantity;
    this.calculateSubTotal();
  }

  calculateSubTotal(){
    if(this.product.onSale) {
      this.subTotal = this.product.specialPrice * this.quantity;
    }else {
      this.subTotal = this.product.sellPrice * this.quantity;
    }
  }
}
