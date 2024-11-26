import { Component, inject, Input } from '@angular/core';
import { Store } from '../../../models/Store';
import { StoresService } from '../../../services/stores.service';
import { ActivatedRoute } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule, } from '@angular/forms';

@Component({
  selector: 'app-store-carte',
  standalone: true,
  imports: [FormsModule,NgIf, NgFor],
  templateUrl: './store-carte.component.html',
  styleUrl: './store-carte.component.css'
})
export class StoreCarteComponent {
  @Input() magasinInput!:Store;

}
