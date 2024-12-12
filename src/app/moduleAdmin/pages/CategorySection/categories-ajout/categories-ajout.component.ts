import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {Category} from '../../../../models/Category';

@Component({
  selector: 'app-categories-ajout',
  standalone: true,
    imports: [
        FormsModule,
        NgIf,
        ReactiveFormsModule,
        RouterLink
    ],
  templateUrl: './categories-ajout.component.html',
  styleUrl: './categories-ajout.component.css'
})
export class CategoriesAjoutComponent {
  category: Category = {
    id: "",
    name: '',
    description:''
  };

  ajoutCategory() {

  }
}
