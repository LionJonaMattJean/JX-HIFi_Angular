import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { NgForOf, NgIf } from "@angular/common";
import { RouterLink } from "@angular/router";
import { OrderItem } from '../../../../models/OrderItem';
import { Order } from '../../../../models/Order';
import { User } from '../../../../models/User';
import { ProductsService } from '../../../../services/products.service';
import { Product } from '../../../../models/Product';
import { UsersService } from '../../../../services/users.service';


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
  emailFound!: boolean;
  // order: Order;
  // user: User
  productList!: Product[];

  filteredProducts: Product[] = [];
  activeIndex: number | null = null;
  userFound: boolean = false;
  findUserClicked: boolean = false;
  // userForm: FormGroup;


  constructor(private productService: ProductsService, private usersService: UsersService) {
    //TODO a adapter pour la suite du CRUD de ORDER
    // this.order={
    //   id: "",
    //   idCustomer: "",
    //   card: {
    //     id:"" ,
    //     cardNumber: 0,
    //     experieringDate:{day:0,month:0,year:0},
    //     paiementMethod: "",
    //     cvc: 0,
    //     nameHolder: "",
    //   },
    //   orderItems: [],
    //   totalAmount: 0,
    //   TPS: 5,
    //   TaxeState: 10,
    //   TTC: 15,
    //   status: "",
    //   orderDate: {day:0,month:0,year:0},
    //   shippingAddress:{
    //     id:"",
    //     address: "",
    //     city: "",
    //     postalCode: "",
    //     province: "",
    //     country: ""
    //   },
    // };
    // this.user={
    //   id:"",
    //   email:"",
    //   password:"",
    //   firstName: "",
    //   lastName: "",
    //   phone: "",
    //   role: "",
    //   isDeleted: false,
    //   address:{
    //     id:"",
    //     address: "",
    //     city: "",
    //     postalCode: "",
    //     province: "",
    //     country: ""
    //   }
    // };
    // this.productService.getAllProduct().subscribe(productList=>{
    //   this.productList=productList;
    // })
    // this.userForm = new FormGroup({
    //   email: new FormControl('', [
    //     Validators.required,
    //     Validators.email,
    //   ]),
    // })
    // this.resetUser();
  }
  removeProduct(i: number) {
    // this.order.orderItems.splice(i, 1);
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
        category: { id: '', name: '', description: '' },
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
    // this.order.orderItems.push(newOrderItem);

  }

  addOrder() {

  }

  triggerFindUser(email: string) {

    // if (email) {
    //   this.usersService.getUserByEmail(email).subscribe(user => {
    //     this.user = user;
    //     this.userFound = true;
    //     this.findUserClicked = false;
    //   },
    //     (error) => {
    //       this.emailFound = false;
    //       console.error('User not found', error);
    //     })
    // } else {
    //   this.emailFound = false;
    // }
  }

  filterProducts(query: string, index: number) {
    this.activeIndex = index;
    this.filteredProducts = this.productList.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) || product.id.toString().includes(query)
    );
  }
  selectProduct(orderItem: any, selectedProduct: any) {
    orderItem.product = { ...selectedProduct }; // Copy product details
    this.filteredProducts = []; // Clear the dropdown
  }

  private resetUser() {
    // this.user = {
    //   id: "",
    //   email: "",
    //   password: "",
    //   firstName: "",
    //   lastName: "",
    //   phone: "",
    //   role: "",
    //   isDeleted: false,
    //   address: {
    //     id: "",
    //     address: "",
    //     city: "",
    //     postalCode: "",
    //     province: "",
    //     country: ""
    //   }
    // };
  }
}
