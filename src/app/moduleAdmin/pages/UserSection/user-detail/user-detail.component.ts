import {Component, inject, OnInit} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {User} from '../../../../models/User';

import { CustomerService } from '../../../../services/customer.service';
import {AdministratorService} from '../../../../services/administrator.service';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent implements OnInit{
  customerService = inject(CustomerService)
  id:string="";
  user?: User;

  userDetails: { label: string, value: any }[] = [];

  constructor(private adminService:AdministratorService,private router:Router ,private route:ActivatedRoute){}

  ngOnInit() {
    this.id=String(this.route.snapshot.paramMap.get('id'));
    const currentRoute = this.router.url.split('/')[2];
    if(currentRoute==='admins'){
        this.adminService.getAdministratorById(this.id).subscribe(user=>{
          this.user=user;
          this.userDetails=[
            {label: 'Nom', value: user?.lastName},
            {label: 'Prénom', value: user?.firstName},
            {label: 'Email', value: user?.email},
            {label: 'Téléphone', value: user?.phone},
            {label: 'Adresse', value: user?.address.address},
            {label: 'Ville', value: user?.address.city},
            {label: 'Code postal', value: user?.address.postalCode},
            {label: 'Province', value: user?.address.province},
            {label: 'Pays', value: user?.address.country},
            {label: 'Role', value:( user?.role==='customer')?'Client':(user?.role==='saleagent')?'Agent de vente':'Administrateur'},
          ];
        })
    }else {
      this.customerService.getCustomerById(this.id).subscribe(user=>{
        this.user=user;
        this.userDetails=[
          {label: 'Nom', value: user?.lastName},
          {label: 'Prénom', value: user?.firstName},
          {label: 'Email', value: user?.email},
          {label: 'Téléphone', value: user?.phone},
          {label: 'Adresse', value: user?.address.address},
          {label: 'Ville', value: user?.address.city},
          {label: 'Code postal', value: user?.address.postalCode},
          {label: 'Province', value: user?.address.province},
          {label: 'Pays', value: user?.address.country},
          {label: 'Role', value:( user?.role==='customer')?'Client':(user?.role==='saleagent')?'Agent de vente':'Administrateur'},
        ];

      })
    }

  }
}
