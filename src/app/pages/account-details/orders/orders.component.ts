import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from '../../../services/users.service';
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
  id: string = "";
  constructor(private customerService:CustomerService, private route:ActivatedRoute, private orderService:OrderService) {}

  /**
   * Initializes the component after Angular has fully initialized all data-bound properties.
   * This method retrieves the 'id' parameter from the route's snapshot and fetches customer details
   * using the customer service. Assigns the retrieved user's orders to the component's 'orderList'.
   *
   * @return {void} Does not return any value.
   */
  ngOnInit(): void {
    this.id=String(this.route.snapshot.paramMap.get('id'));
      this.customerService.getCustomerById(this.id).subscribe(user=>{
     this.orderList=user.orders;
   })


  }



}
