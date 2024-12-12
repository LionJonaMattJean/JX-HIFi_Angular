import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {Administrator} from '../../../models/Administrator';
import {UsersService} from '../../../services/users.service';

@Component({
  selector: 'app-parameter',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './parameter.component.html',
  styleUrl: './parameter.component.css'
})
export class ParameterComponent implements OnInit {
  id: string = "";
  user?:Administrator;
  addressDetail?:{label:string,value:string}[]=[];
  constructor(private usersService:UsersService,private route:ActivatedRoute) {}


  ngOnInit(){
   // this.id=String(this.route.snapshot.paramMap.get('idAdmin'));
    this.id="USE1518";
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

  modifyAdministrator() {

  }
}
