import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {OrderItem} from '../../../../models/OrderItem';
import {Order} from '../../../../models/Order';
import {User} from '../../../../models/User';


@Component({
  selector: 'app-order-ajout',
  standalone: true,
    imports: [
        FormsModule,
        NgForOf,
        NgIf,
        ReactiveFormsModule,
        RouterLink
    ],
  templateUrl: './order-ajout.component.html',
  styleUrl: './order-ajout.component.css'
})
export class OrderAjoutComponent {
  orderAdd: boolean = false;
  order: Order;
  user: User

constructor() {
  this.order={
    id: "",
    idCustomer: "",
    card: {
      id:"" ,
      cardNumber: 0,
      experieringDate:{day:0,month:0,year:0},
      paiementMethod: "",
      cvc: 0,
      nameHolder: "",
    },
    orderItems: [],
    totalAmount: 0,
    TPS: 5,
    TaxeState: 10,
    TTC: 15,
    status: "",
    orderDate: {day:0,month:0,year:0},
    shippingAddress:{
      address: "",
      city: "",
      postalCode: "",
      province: "",
      country: ""
    },
  };
  this.user={
    id:"",
    email:"",
    password:"",
    firstName: "",
    lastName: "",
    phone: "",
    role: "",
    isDeleted: false,
    address:{
      address: "",
      city: "",
      postalCode: "",
      province: "",
      country: ""
    }
  };
}
  removeProduct(i:number) {
    this.order.orderItems.splice(i,1);
  }

  addProduct() {
    //
    const newOrderItem: OrderItem = {
      id: '',
      product: {
        id: '',
        name: '',
        description: '',
        sellPrice: 0,
        costPrice: 0,
        specialPrice: 0,
        stock: 0,
        onSale: false,
        category: {id:'',name:'',description:''},
        shortSpecifications: [],
        specificationDetails: [],
        images: [],
        colors: [],
        reviews: [],
        brand: ''
      },
      quantity: 1,
      subTotal: 0
    };
    this.order.orderItems.push(newOrderItem);

  }

  addOrder() {

  }

  findUser() {

  }
}
