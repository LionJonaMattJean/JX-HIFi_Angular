import { Injectable } from '@angular/core';
import { AcceuilCarteCategorie } from '../models/AcceuilCarteCategorie';

@Injectable({
  providedIn: 'root'
})
export class AcceuilCarteCategorieService {
  //readonly baseUrl = 'la connection a la DB dans le future'

  listAcceuilCarteCategorie: AcceuilCarteCategorie[] = [
    {
      nom: 'Sale',
      image:'/assets/images/categories/sale-logo.jpg'
    },
    {
      nom: 'Desktops',
      image: '/assets/images/categories/tower.jpg'
    },
    {
      nom: 'Laptops',
      image: '/assets/images/categories/laptop.jpg'
    },
    {
      nom: 'Screens',
      image: '/assets/images/categories/monitor.jfif'
    },
    {
      nom: 'Phones',
      image: '/assets/images/categories/phone.jfif'
    },
    {
      nom: 'Headphones',
      image: '/assets/images/categories/headphones.jpg'
    }
  ]

  constructor() { }

  getAllCartesCategories():AcceuilCarteCategorie[]{
    return this.listAcceuilCarteCategorie;
  }
}
