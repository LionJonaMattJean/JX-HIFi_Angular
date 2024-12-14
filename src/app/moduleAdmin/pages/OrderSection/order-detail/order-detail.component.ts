import { Component, OnInit } from '@angular/core';
import { Order } from '../../../../models/Order';

import { ActivatedRoute, RouterLink } from '@angular/router';
import { CustomerService } from '../../../../services/customer.service';
import { OrderService } from '../../../../services/order.service';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-order-detail',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './order-detail.component.html',
  styleUrl: './order-detail.component.css'
})
export class OrderDetailComponent implements OnInit {
  id: string = "";
  order?: Order;
  orderDetails: { label: string, value: any }[] = [];

  constructor(private customerService: CustomerService, private orderService: OrderService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.orderService.getOrderById(this.id).subscribe(order => {
      this.order = order;
      this.customerService.getCustomerById(order.idCustomer).subscribe(customer => {
        this.orderDetails = [
          { label: 'Prénom', value: customer.firstName },
          { label: 'Nom', value: customer.lastName },
          { label: 'Email', value: customer.email },
          { label: 'Telephone', value: customer.phone },
          {
            label: 'Date de commande',
            value: [order.orderDate.day, order.orderDate.month, order.orderDate.year].join('/')
          },
          { label: 'Statut', value: order.status },
          { label: 'Total', value: order.totalAmount },
          { label: 'Produits', value: order.orderItems },
          { label: 'Adresse de livraison', value: order.shippingAddress.address },
          { label: 'Ville', value: order.shippingAddress.city },
          { label: 'Code postal', value: order.shippingAddress.postalCode },
          { label: 'Province', value: order.shippingAddress.province },
          { label: 'Pays', value: order.shippingAddress.country }
        ];
      })
    })
  }
}




