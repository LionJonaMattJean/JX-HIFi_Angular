import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import { User } from '../../../models/User';
import { Order } from '../../../models/Order';
import { OrderService } from '../../../services/order.service';
import {CustomerService} from '../../../services/customer.service';


@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [FormsModule, NgForOf, NgIf],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})

export class OrdersComponent implements OnInit{
  orderList: Order[] = [];
  user?:User;
  id?:string;

  constructor(private customerService:CustomerService, private route:ActivatedRoute, private orderService:OrderService) {}

 ngOnInit(): void {
    this.id=String(this.route.snapshot.paramMap.get('id'));
    this.customerService.getCustomerById('USE1000').subscribe(user=>{
    this.orderList=user.orders;
   })
  };

}


