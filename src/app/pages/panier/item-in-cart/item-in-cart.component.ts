import { Component, Input } from '@angular/core';
import { OrderItem } from '../../../models/OrderItem';

@Component({
  selector: 'app-item-in-cart',
  standalone: true,
  imports: [],
  templateUrl: './item-in-cart.component.html',
  styleUrl: './item-in-cart.component.css'
})
export class ItemInCartComponent {
  @Input() item!:OrderItem;

}
