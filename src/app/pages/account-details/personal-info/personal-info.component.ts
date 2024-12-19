import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import { LoginService } from '../../../services/login.service';
import { User } from '../../../models/User';
import { CustomerService } from '../../../services/customer.service';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [FormsModule, NgForOf, NgIf],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css'
})


export class PersonalInfoComponent implements OnInit {
  id: string = "";
  user?:User;
  addressDetail?: { label:string, value:string } [] = [];


  constructor(private customerService: CustomerService,
              private route: ActivatedRoute,
              private loginService: LoginService

  ) {}

   ngOnInit(){

    this.loginService.getCustomerId().subscribe((id) => {
      console.log('ID récupéré depuis le login service:', id);
      if (id) {
        this.loadCustomerData(id);
      } else {
        console.log('Aucun ID reçu, impossible de charger les données.');
      }
    });
  }

    private loadCustomerData(id: string) {

      console.log('Chargement des données pour l\'ID:', id);
      this.customerService.getCustomerById(id).subscribe((user) => {
        console.log('Réponse de getCustomerById:', user); 

        this.user = user;
        this.addressDetail = [
          { label: 'Adresse', value: this.user.address.address },
          { label: 'Ville', value: this.user.address.city },
          { label: 'Code Postal', value: this.user.address.postalCode },
          { label: 'Province', value: this.user.address.province },
          { label: 'Pays', value: this.user.address.country },
        ];
      });

    }

}
