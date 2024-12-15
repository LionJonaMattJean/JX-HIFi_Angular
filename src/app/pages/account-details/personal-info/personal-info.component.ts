import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from '../../../services/users.service';
import { User } from '../../../models/User';
import { CustomerService } from '../../../services/customer.service';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [FormsModule, NgForOf, NgIf],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css'
})
export class PersonalInfoComponent {
 id: string = "";
  user?:User;
  addressDetail?:{label:string,value:string}[]=[];
  constructor(private customerService: CustomerService,private route:ActivatedRoute) {}

   ngOnInit(){
   // this.id=String(this.route.snapshot.paramMap.get('idAdmin'));
    this.id="USE1000";
    this.customerService.getCustomerById(this.id).subscribe(user=>{
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
