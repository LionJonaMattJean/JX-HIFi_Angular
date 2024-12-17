import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {NgClass, NgIf} from '@angular/common';
import {User} from '../../../../models/User';

import {AdministratorService} from '../../../../services/administrator.service';
import {CustomerService} from '../../../../services/customer.service';

@Component({
  selector: 'app-user-delete',
  standalone: true,
  imports: [
    RouterLink,
    NgClass,
    NgIf
  ],
  templateUrl: './user-delete.component.html',
  styleUrl: './user-delete.component.css'
})
export class UserDeleteComponent implements OnInit{
  user?:User;
  id!:string;
  isDelete: boolean=false;
  isDeactivate: boolean=false;
  currentRoute!:string ;
  constructor(private route:ActivatedRoute,
              private router:Router,
              private adminService:AdministratorService,
              private customerService:CustomerService) {

  }
  ngOnInit(): void {
    this.id=String(this.route.snapshot.paramMap.get('id'));
    this.currentRoute = this.router.url.split('/')[2];
    if(this.currentRoute==='admins'){
      this.adminService.getAdministratorById(this.id).subscribe(user => {
        this.user = user;
      })
    }else{
      this.customerService.getCustomerById(this.id).subscribe(user => {
        this.user = user;
      })
    }

  }
  deleteUser(){
    if(this.currentRoute==='admins'){
      this.adminService.deleteAdministrator(this.id).subscribe(() => {
        this.isDelete = true;
      });
    }else {
      this.customerService.deleteCustomer(this.id).subscribe(()=>{
        this.isDelete = true;
      })

    }
  }

  deactivateUser() {
    if(this.currentRoute==='admins'){
      if(this.user){
        this.adminService.deactivate(this.id,this.user).subscribe(() => {
            this.isDeactivate = true;
            this.isDelete = true;
          }
        )
      }
      }else{
      this.customerService.deactivate(this.id,this.user).subscribe(() => {
        this.isDeactivate = true;
        this.isDelete = true;
      })

    }
  }
}
