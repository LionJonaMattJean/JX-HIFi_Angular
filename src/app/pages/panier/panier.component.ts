import { Component, inject } from '@angular/core';
import { ShoppingCart } from '../../models/ShoppingCart';
import { ItemInCartComponent } from "./item-in-cart/item-in-cart.component";
import { SubTotalComponent } from "./sub-total/sub-total.component";
import { CouponCodeComponent } from "./coupon-code/coupon-code.component";
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { OrderItem } from '../../models/OrderItem';
import { RouterOutlet } from '@angular/router';
import { coupons } from '../../models/Coupons';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [ItemInCartComponent, SubTotalComponent, CouponCodeComponent,RouterOutlet],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent {
 cartServ:ShoppingCartService = inject(ShoppingCartService);
 orderitem:OrderItem[] = [];
 coupon: coupons|undefined

  onInit():void{
    this.orderitem = ShoppingCartService.shopppingCart.cartItems;
  }

  deleteAll(){
    this.cartServ.clearCart();
  }


}
