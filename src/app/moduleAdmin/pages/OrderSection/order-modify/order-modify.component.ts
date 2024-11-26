import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';
import {Order} from '../../../../models/Order';
import {User} from '../../../../models/User';
import {UsersService} from '../../../../services/users.service';
import {OrderService} from '../../../../services/order.service';
import {OrderItem} from '../../../../models/OrderItem';
import {Product} from '../../../../models/Product';
import {ProductsService} from '../../../../services/products.service';

@Component({
  selector: 'app-order-modify',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    NgIf,
    NgForOf
  ],
  templateUrl: './order-modify.component.html',
  styleUrl: './order-modify.component.css'
})
export class OrderModifyComponent implements OnInit{
  order!: Order;
  id!: string;
  user!:User;
  orderModified:boolean=false;
  productList!:Product[];
  filteredList:Product[]=[];

  constructor(private orderService: OrderService,
              private userService: UsersService,
              private route:ActivatedRoute,
              private productService:ProductsService) { }

  ngOnInit() {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.orderService.getOrderById(this.id).subscribe(order => {
      this.order = order;
      this.userService.getUserById(this.order.idCustomer).subscribe(user => {
        this.user = user;
      });
    });
    this.productService.getAllProduct().subscribe(productList=>{
      this.productList=productList;
    })
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

  modifyOrder() {
    this.orderModified=true;
  }
}
