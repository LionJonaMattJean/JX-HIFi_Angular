import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from '../../../services/users.service';
import { User } from '../../../models/User';
import { Order } from '../../../models/Order';
import { OrderService } from '../../../services/order.service';


@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [FormsModule, NgForOf, NgIf],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})

export class OrdersComponent {  
  orderList: Order[] = [];
  user?:User;

  constructor(private usersService:UsersService, private route:ActivatedRoute, private orderService:OrderService) {}


ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id');
  if (id) {
    this.usersService.getUserById(id).subscribe(user => {
      this.user = user;

      // Fetch orders and filter by the user's ID
      this.orderService.getOrders().subscribe((orders: Order[]) => {
        this.orderList = orders.filter(order => order.idCustomer === this.user?.id);
      });
    });
  } else {
    console.error('User ID is null');
  }
}



}
