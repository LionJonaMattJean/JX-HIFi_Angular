import { Component } from '@angular/core';
import { ShoppingCart } from '../../models/ShoppingCart';
import { ItemInCartComponent } from "./item-in-cart/item-in-cart.component";
import { SubTotalComponent } from "./sub-total/sub-total.component";

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [ItemInCartComponent, SubTotalComponent],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent {
  

}
