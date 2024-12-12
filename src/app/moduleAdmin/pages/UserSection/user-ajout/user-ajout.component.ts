import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {User} from '../../../../models/User';

@Component({
  selector: 'app-user-ajout',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './user-ajout.component.html',
  styleUrl: './user-ajout.component.css'
})
export class UserAjoutComponent {
  user?:User;
  addressDetail?:{label:string,value:string}[]=[]
  constructor() {
    this.user ={
      id:'',
      email:'',
      password:'',
      firstName:'',
      lastName:'',
      phone:'',
      address:{
        address:'',
        city:'',
        postalCode:'',
        province:'',
        country:''
      },
      role:'',
      isDeleted:false
    };
    this.addressDetail = [
      {label:"Adresse",value:this.user.address.address},
      {label:"Ville",value:this.user.address.city},
      {label:"Code Postal",value:this.user.address.postalCode},
      {label:"Province",value:this.user.address.province},
      {label:"Pays",value:this.user.address.country}
    ]
  }

  addUser() {

  }
}
