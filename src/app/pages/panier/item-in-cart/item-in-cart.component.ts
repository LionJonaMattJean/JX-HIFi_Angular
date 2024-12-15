import { Component, Input, inject } from '@angular/core';
import { OrderItem } from '../../../models/OrderItem';
import { ShoppingCartService } from '../../../services/shopping-cart.service';

@Component({
  selector: 'app-item-in-cart',
  standalone: true,
  imports: [],
  templateUrl: './item-in-cart.component.html',
  styleUrl: './item-in-cart.component.css'
})

//PLEASE REVIEW MY CREATION OF THESE FUNCTIONS, IF THEY ARE NECESSARY, OR IM JUST OUT OF MY MIND
export class ItemInCartComponent {
  @Input() item!:OrderItem;
  cartServ:ShoppingCartService = inject(ShoppingCartService);

  deleteItem(thisItemId:string){
    this.cartServ.removeItem;
  }

  updateQuantity(thisItemId:string, newQty: number){
    this.cartServ.updateItemQuantity(thisItemId, newQty);
  }

  shareItem(thisItemUrl: string){
    //copy this product's url to the clipboard
  }

}
