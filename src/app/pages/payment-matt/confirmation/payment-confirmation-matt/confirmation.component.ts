import { Component,OnDestroy,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
//gestion des objets
import { Subject, switchMap } from 'rxjs';
import { takeUntil } from 'rxjs';
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

export class ConfirmationComponent implements OnInit,OnDestroy {
  private destroy$ = new Subject<void>();

  ngOnDestroy(): void{
    this.destroy$.next();
    this.destroy$.complete();
  }

  userInfo: Customer | null = null;
  shoppingCart: ShoppingCart | null = null;
  orderConfirmationNumber: string = '';

  totalBeforeTax: number = 0; 
  tps: number = 0;  
  tvq: number = 0;  
  totalTtc: number = 0; 

  constructor(
    private customerService:CustomerService,
    private loginService: LoginService,
    private orderService: OrderService,
    private router: Router) {
      const navigation = this.router.getCurrentNavigation();
      const state = navigation?.extras.state as {userInfo: Customer};
      this.userInfo = state?.userInfo || null;
    }

  redirectToTracking(){
    this.router.navigate(['tracking-order'],{queryParams:{orderNumber: this.orderConfirmationNumber}});
  }

  ngOnInit(): void {

    if (!this.userInfo) {
      this.router.navigate(['/home'], { replaceUrl: true });
    }else{
      this.generateOrderConfirmationNumber();
      this.loadCustomerData();
    }   
  }

  private generateOrderConfirmationNumber(): void {
    this.loginService.getCustomerId()
      .pipe(
        takeUntil(this.destroy$),
        switchMap((customerId) =>
          customerId
            ? this.customerService.getCustomerById(customerId)
            : []
        )
      )
      .subscribe((customer) => {
        if (customer?.address) {
          const addressPrefix = customer.address.address.substring(0, 4);
          const today = new Date();
          const dateString = today.toISOString().split('T')[0];
          this.orderConfirmationNumber = `${customer.id}${addressPrefix}${dateString}`;
        }
      });
  }
  
  
  private loadCustomerData(): void{
    this.loginService.getCustomerId().subscribe((customerId) => {
      if(customerId){
        this.customerService.getCustomerById(customerId).subscribe((customer) => {
          this.userInfo = customer;
          this.loadShoppingCart(customerId);
        });
      }
    });
  }

  private loadShoppingCart(customerId: string): void {

    this.orderService.getOrders().subscribe((orders) => {
      const cartItems = orders.flatMap((order) => order.orderItems);
      if(!orders || orders.length === 0){
        this.shoppingCart = {
          instance: {} as ShoppingCart,
          customer: this.userInfo!,
          cartItems: [],
          total: 0,
        };
        return;
      }else{
        this.shoppingCart = {
          instance: {} as ShoppingCart,
          customer: this.userInfo!,
          cartItems: [],
          total: orders.reduce((acc, order) => acc + order.totalAmount, 0),
        };
        this.calculateTotals();
      }
    });
  }

    private calculateTotals(): void {

    if(!this.shoppingCart) return;
    //total avant taxe
    this.totalBeforeTax = this.shoppingCart.cartItems.reduce(
      (acc, item) => acc + item.subTotal,
      0
    );
    //taxes et total
    this.tps = this.totalBeforeTax * 0.07;
    this.tvq = this.totalBeforeTax * 0.08;
    this.totalTtc = this.totalBeforeTax + this.tps + this.tvq;
  }



}
    

    
