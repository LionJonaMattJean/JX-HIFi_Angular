import { Component } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {NgClass, NgIf} from '@angular/common';
import {User} from '../../../../models/User';
import {UsersService} from '../../../../services/users.service';

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
export class UserDeleteComponent {
  user?:User;
  id:string;
  isDelete: boolean=false;
  isDeactivate: boolean=false;

  constructor(private route:ActivatedRoute,private usersService:UsersService) {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.usersService.getUserById(this.id).subscribe(user => {
    this.user = user;
    });
  }
  deleteUser(){
    //this.usersService.deleteUser(this.id).subscribe(() => {
    this.isDelete = true;
    //});
  }

  deactivateUser() {
    if(this.user){
      this.user.isDeleted = true;
      this.isDeactivate = true;
    }

  }
}
