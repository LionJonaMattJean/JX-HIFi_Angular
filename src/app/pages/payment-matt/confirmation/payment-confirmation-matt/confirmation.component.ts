import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
//services imports
import { CustomerService } from '../../../../services/customer.service';
import { LoginService } from '../../../../services/login.service';
import { OrderService } from '../../../../services/order.service';
//modeles imports
import { Customer } from '../../../../models/Customer';
import { ShoppingCart } from '../../../../models/ShoppingCart';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [FormsModule,CurrencyPipe,RouterLink,CommonModule],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})

export class ConfirmationComponent implements OnInit {
  userInfo: Customer | null = null;
  shoppingCart: ShoppingCart | null = null;
  totalBeforeTax: number = 0; 
  tps: number = 0;  
  tvq: number = 0;  
  totalTtc: number = 0; 

  constructor(
    private customerService:CustomerService,
    private loginService: LoginService,
    private orderService: OrderService) {}

  ngOnInit(): void {

    this.loginService.getCustomerId().subscribe((customerId)=>{
      if(customerId){
        this.customerService.getCustomerById(customerId).subscribe((customer)=>{
          this.userInfo = customer;

          this.loadShoppingCart(customerId);
        });
      }else{
        console.warn('Aucun utilisateur connecté');
      }
    });
  }

  private loadShoppingCart(customerId: string): void{
    this.orderService.getOrders().subscribe((orders)=>{
      const cartItems = orders
      .filter((order)=>order.idCustomer === customerId)
      .flatMap((order)=> order.orderItems);

      this.shoppingCart = {
        instance:{} as ShoppingCart,
        customer: this.userInfo!,
        cartItems,
        total: cartItems.reduce((acc, item)=> acc + item.subTotal, 0),
      };

      this.calculateTotals();
    })
  }

    private calculateTotals(): void {

    if(!this.shoppingCart) return;
    //total avant taxe
    this.totalBeforeTax = this.shoppingCart.cartItems.reduce(
      (acc, item) => acc + item.subTotal,
      0
    );
    //calcul de la TPS
    this.tps = this.totalBeforeTax * 0.07;

    // Calcul de la TVQ
    this.tvq = this.totalBeforeTax * 0.08;

    // Calcul du total TTC
    this.totalTtc = this.totalBeforeTax + this.tps + this.tvq;
  }
}

    
