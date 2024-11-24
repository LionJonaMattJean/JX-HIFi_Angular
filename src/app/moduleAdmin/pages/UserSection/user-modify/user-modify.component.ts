import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {User} from '../../../../models/User';
import {UsersService} from '../../../../services/users.service';

@Component({
  selector: 'app-user-modify',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './user-modify.component.html',
  styleUrl: './user-modify.component.css'
})
export class UserModifyComponent implements OnInit {
  id: string = "";
  user?:User;
  addressDetail?:{label:string,value:string}[]=[]

  constructor(private usersService:UsersService,private route:ActivatedRoute) {}

  ngOnInit() {
    this.id=String(this.route.snapshot.paramMap.get('id'));
    this.usersService.getUserById(this.id).subscribe(user=>{
      this.user=user;
      this.addressDetail=[
        {label:"Adresse",value:this.user.address.address},
        {label:"Ville",value:this.user.address.city},
        {label:"Code Postal",value:this.user.address.postalCode},
        {label:"Province",value:this.user.address.province},
        {label:"Pays",value:this.user.address.country}
      ]
    });
  }
}
