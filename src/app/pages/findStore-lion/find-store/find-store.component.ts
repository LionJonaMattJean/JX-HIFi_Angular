import { Component, inject, OnInit } from '@angular/core';
import { Store } from '../../../models/Store';
import { StoresService } from '../../../services/stores.service';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { StoreCarteComponent } from "../store-carte/store-carte.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-find-store',
  standalone: true,
  imports: [CommonModule, NgFor, StoreCarteComponent, FormsModule],
  templateUrl: './find-store.component.html',
  styleUrl: './find-store.component.css'
})
export class FindStoreComponent implements OnInit {
  storeList: Store[] = [];
  selectedStore?: Store;

  constructor(private storeServ: StoresService){

  }

  ngOnInit(): void {
    this.getMagasins();
  }

  getMagasins():void{
    this.storeServ.getAllStores().subscribe(s => this.storeList = s);
  }


  onSelect(magasin: Store):void{
    this.selectedStore = magasin;
  }

}
