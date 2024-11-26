import { Component, inject, OnInit } from '@angular/core';
import { Store } from '../../../models/Store';
import { StoresService } from '../../../services/stores.service';
import { CommonModule, NgFor } from '@angular/common';
import { StoreCarteComponent } from "../store-carte/store-carte.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-find-store',
  standalone: true,
  imports: [CommonModule, StoreCarteComponent, FormsModule, NgFor],
  templateUrl: './find-store.component.html',
  styleUrl: './find-store.component.css'
})
export class FindStoreComponent implements OnInit {
  storeList: Store[] = [];
  storeServ: StoresService = inject(StoresService);

  constructor(){}

  ngOnInit(): void{
    this.getMagasins();
  }

  getMagasins():void{
    this.storeServ.getAllStores().subscribe(s =>{
      this.storeList = s
      //console.log(s);
    } );
    
  }

}
