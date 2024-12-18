import { Component, inject, Input } from '@angular/core';
import { Store } from '../../../models/Store';
import { FormsModule, } from '@angular/forms';

@Component({
  selector: 'app-store-carte',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './store-carte.component.html',
  styleUrl: './store-carte.component.css'
})
export class StoreCarteComponent {
  @Input() magasinInput!:Store;

}
