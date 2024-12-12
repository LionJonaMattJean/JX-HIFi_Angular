import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {Store} from '../../../../models/Store';
import {StoresService} from '../../../../services/stores.service';

@Component({
  selector: 'app-store-detail',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './store-detail.component.html',
  styleUrl: './store-detail.component.css'
})
export class StoreDetailComponent implements OnInit{
  id: string = "";
  store?: Store;
  storeDetails: { label: string, value: any }[] = [];

  constructor(private storesService:StoresService, private route:ActivatedRoute) {}

  ngOnInit() {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.storesService.getStoreById(this.id).subscribe(store => {
      this.store = store;
      this.storeDetails = [
        {label: 'Nom', value: store?.name},
        {label: 'Adresse', value: store?.address.address},
        {label: 'Ville', value: store?.address.city},
        {label: 'Code postal', value: store?.address.postalCode},
        {label: 'Province', value: store?.address.province},
        {label: 'Pays', value: store?.address.country},
        {label: 'Téléphone', value: store?.telephone},
        {label: 'Email', value: store?.email},
        {label: 'Manager', value: store?.manager},
      ];
    });
  }
}
