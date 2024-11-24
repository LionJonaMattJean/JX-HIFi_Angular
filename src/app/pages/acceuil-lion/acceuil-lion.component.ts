import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { CarteCategorieComponent } from "./carte-categorie/carte-categorie.component";
import { AcceuilCarteCategorie } from '../../models/AcceuilCarteCategorie';
import { AcceuilCarteCategorieService } from '../../services/acceuil-carte-categorie.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-acceuil-lion',
  standalone: true,
  imports: [NgFor, CarteCategorieComponent, CommonModule],
  templateUrl: './acceuil-lion.component.html',
  styleUrl: './acceuil-lion.component.css'
})
export class AcceuilLionComponent {
  acceuilCarteList: AcceuilCarteCategorie[] = [];

  acceuilCarteService: AcceuilCarteCategorieService = inject(AcceuilCarteCategorieService)

  constructor(){
    this.acceuilCarteList = this.acceuilCarteService.getAllCartesCategories();
  }

}
