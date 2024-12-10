import { Component, OnInit } from '@angular/core';
import { Card } from '../../../models/Card';
import { CustomerService } from '../../../services/customer.service';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../../services/order.service';
import { User } from '../../../models/User';
import { Customer } from '../../../models/Customer';
import { Order } from '../../../models/Order';
import { CardService } from '../../../services/card.service';

@Component({
  selector: 'app-payment-info',
  standalone: true,
  imports: [],
  templateUrl: './payment-info.component.html',
  styleUrl: './payment-info.component.css'
})
export class PaymentInfoComponent implements OnInit{
  cardList: Card[] = [];

   user?:User;
  id?:string;
  customer?:Customer

  constructor(private customerService:CustomerService, private route:ActivatedRoute, private cardService: CardService){}

  ngOnInit(): void {
    
    
  }

}
