import { Component } from '@angular/core';
import {StoresService} from '../../../../services/stores.service';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {Store} from '../../../../models/Store';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-store-delete',
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
    NgClass
  ],
  templateUrl: './store-delete.component.html',
  styleUrl: './store-delete.component.css'
})
export class StoreDeleteComponent {
  id:string;
  store?:Store;
  isDelete: boolean=false;

  constructor(private storeService:StoresService,private route:ActivatedRoute) {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.storeService.getStoreById(this.id).subscribe(store => {
    this.store = store;
    });
  }
  deleteStore(){
   // this.storeService.deleteUser(this.id).subscribe(() => {
    this.isDelete = true;
    //});
  }
}
