import {Component, OnInit} from '@angular/core';
import {Store} from '../../../../models/Store';
import {StoresService} from '../../../../services/stores.service';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-store-modify',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './store-modify.component.html',
  styleUrl: './store-modify.component.css'
})
export class StoreModifyComponent implements OnInit{
  id:string = "";
  store?:Store;
  addressDetail?:{label:string,value:string}[]=[]

  constructor(private storesService:StoresService,private route:ActivatedRoute) {}

  ngOnInit() {
    this.id=String(this.route.snapshot.paramMap.get('id'));
    this.storesService.getStoreById(this.id).subscribe(store=>{
      this.store=store;
      this.addressDetail=[
        {label:"Adresse",value:this.store.address.address},
        {label:"Ville",value:this.store.address.city},
        {label:"Code Postal",value:this.store.address.postalCode},
        {label:"Province",value:this.store.address.province},
        {label:"Pays",value:this.store.address.country}
      ]
    });
  }

  modifyStore() {

  }
}
