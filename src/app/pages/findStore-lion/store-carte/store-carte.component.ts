import { Component, Input } from '@angular/core';
import { Store } from '../../../models/Store';
import { StoresService } from '../../../services/stores.service';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-store-carte',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './store-carte.component.html',
  styleUrl: './store-carte.component.css'
})
export class StoreCarteComponent {
  @Input() magasin?:Store;

  constructor(
    private storeServ: StoresService,
    private route: ActivatedRoute
  ){}

  ngOnInit():void{
    this.getMagasin();
  }

  getMagasin():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.storeServ.getStoreById('id').subscribe(magasin => this.magasin = magasin);
  }

}
