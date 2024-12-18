import { Component } from '@angular/core';
import {NgClass, NgIf} from '@angular/common';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {User} from '../../../../models/User';
import {Order} from '../../../../models/Order';
import {UsersService} from '../../../../services/users.service';
import {OrderService} from '../../../../services/order.service';

@Component({
  selector: 'app-order-delete',
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
    NgClass
  ],
  templateUrl: './order-delete.component.html',
  styleUrl: './order-delete.component.css'
})
export class OrderDeleteComponent {
  isDeactivate: boolean = false;
  isDelete: boolean = false;
  id: string;
  order!: Order;
  user!: User;

  constructor(private route:ActivatedRoute,
              private orderService:OrderService,
              private usersService:UsersService) {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.orderService.getOrderById(this.id).subscribe(order => {
      this.order = order;
    });
    //TODO a adapter pour la suite du CRUD de ORDER
    // this.usersService.getUserById(this.order.idCustomer).subscribe(user => {
    //   this.user = user;
    // })
  }
  deactivateOrders() {
    this.isDeactivate = true;

  }

  deleteOrder() {
    this.isDelete = true;
  }
}
