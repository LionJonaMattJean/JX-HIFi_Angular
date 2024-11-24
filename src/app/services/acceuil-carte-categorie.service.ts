import { Injectable } from '@angular/core';
import { AcceuilCarteCategorie } from '../models/AcceuilCarteCategorie';

@Injectable({
  providedIn: 'root'
})
export class AcceuilCarteCategorieService {
  //readonly baseUrl = 'la connection a la DB dans le future'

  listAcceuilCarteCategorie: AcceuilCarteCategorie[] = [
    {
      id: 'CAT111',
      nom: 'Sale',
      image:'/assets/images/categories/sale-logo.jpg'
    },
    {
      id: 'CAT222',
      nom: 'Desktops',
      image: '/assets/images/categories/tower.jpg'
    },
    {
      id: 'CAT333',
      nom: 'Laptops',
      image: '/assets/images/categories/laptop.jpg'
    },
    {
      id: 'CAT444',
      nom: 'Phones',
      image: '/assets/images/categories/phone.jfif'
    },
        {
      id: 'CAT555',
      nom: 'Screens',
      image: '/assets/images/categories/monitor.jfif'
    },
    {
      id: 'CAT666',
      nom: 'Headphones',
      image: '/assets/images/categories/headphones.jpg'
    }
  ]

  constructor() { }

  getAllCartesCategories():AcceuilCarteCategorie[]{
    return this.listAcceuilCarteCategorie;
  }
}
