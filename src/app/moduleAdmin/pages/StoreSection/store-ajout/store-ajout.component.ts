import { Component } from '@angular/core';
import {Store} from '../../../../models/Store';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-store-ajout',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './store-ajout.component.html',
  styleUrl: './store-ajout.component.css'
})
export class StoreAjoutComponent {
store!:Store;
addressDetail!:{label:string,value:string}[];
  constructor() {
    this.store = {
      id: '',
      name: '',
      address: {
        address: '',
        city: '',
        postalCode: '',
        province: '',
        country: ''
      },
      telephone: '',
      email: '',
      manager: ''
    };
    this.addressDetail = [
      {label:"Adresse",value:this.store.address.address},
      {label:"Ville",value:this.store.address.city},
      {label:"Code Postal",value:this.store.address.postalCode},
      {label:"Province",value:this.store.address.province},
      {label:"Pays",value:this.store.address.country}
    ]

  }

  addStore() {
    console.log(this.store);
  }
}
