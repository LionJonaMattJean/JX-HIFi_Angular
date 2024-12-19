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
  order?: any;
  orderDetails: { label: string, value: any }[] = [];

  constructor(private orderService: OrderService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.orderService.getOrderById(this.id).subscribe(order => {
      this.order = order;
      this.orderDetails = [
        { label: 'Prénom', value: order.customer.firstName },
        { label: 'Nom', value: order.customer.lastName },
        { label: 'Email', value: order.customer.email },
        { label: 'Telephone', value: order.customer.phone },
        {
          label: 'Date de commande',
          value: `${order.orderDate[2].toString().padStart(2, '0')}/${order.orderDate[1].toString().padStart(2, '0')}/${order.orderDate[0]}`
        },
        { label: 'Statut', value: order.status },
        { label: 'Total (tx incluse)', value: order.totalAmount },
        { label: 'Produits', value: order.orderItems },
        { label: 'Adresse de livraison', value: order.shippingAddress.address },
        { label: 'Ville', value: order.shippingAddress.city },
        { label: 'Code postal', value: order.shippingAddress.postalCode },
        { label: 'Province', value: order.shippingAddress.province },
        { label: 'Pays', value: order.shippingAddress.country }
      ];
    })
  }
}