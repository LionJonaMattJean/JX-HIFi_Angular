import { Component } from '@angular/core';
import { coupons } from '../../../models/Coupons';

@Component({
  selector: 'app-coupon-code',
  standalone: true,
  imports: [],
  templateUrl: './coupon-code.component.html',
  styleUrl: './coupon-code.component.css'
})
export class CouponCodeComponent {
  couponRabais: coupons|undefined;

  checkCoupon(code:string){
    //add body to check in database if coupon cope is valid
   
  }

}
