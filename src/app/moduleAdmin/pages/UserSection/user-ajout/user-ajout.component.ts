import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { User } from '../../../../models/User';
import { UsersService } from '../../../../services/users.service';
import { Customer } from '../../../../models/Customer';
import { Administrator } from '../../../../models/Administrator';
import {CustomerService} from '../../../../services/customer.service';

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
export class UserAjoutComponent implements OnInit {
  id: string = "";
  user!:User;
  addressDetail?:{label:string,value:string}[]=[]
  clientForm!:FormGroup;
  alertMessage: string | null = null;
  alertType: string = 'alert-success';

  constructor(private fb:FormBuilder,
              private customerService:CustomerService,
              private userService: UsersService,) {}
ngOnInit() {
  this.user = {
    id: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: '',
    address: {
      id: '',
      address: '',
      city: '',
      postalCode: '',
      province: '',
      country: ''
    },
    role: '',
    isDeleted: false
  };
  this.loadClient();
}
  private getAddressDetailControls() {
    const address = this.user?.address;
    return [
      this.fb.group({label: 'Adresse', value: [address?.address, Validators.required]}),
      this.fb.group({label: 'Ville', value: [address?.city, Validators.required]}),
      this.fb.group({label: 'Code Postal', value: [address?.postalCode, Validators.required]}),
      this.fb.group({label: 'Province', value: [address?.province, Validators.required]}),
      this.fb.group({label: 'Pays', value: [address?.country, Validators.required]})
    ];
  }
  get addressDetails() {
    return this.clientForm.get('addressDetails') as FormArray;
  }
  addUser() {
    if (!this.user?.role) {
      alert("Veuillez sélectionner un rôle pour l'utilisateur.");
      return;
    }

    this.user.address = {
      address: this.addressDetail!.find(a => a.label === 'Adresse')?.value || '',
      city: this.addressDetail!.find(a => a.label === 'Ville')?.value || '',
      postalCode: this.addressDetail!.find(a => a.label === 'Code Postal')?.value || '',
      province: this.addressDetail!.find(a => a.label === 'Province')?.value || '',
      country: this.addressDetail!.find(a => a.label === 'Pays')?.value || '',
      id: ''
    };

    if (this.user.role === 'customer') {
      this.userService.createNewCustomer(this.user as Customer).subscribe({
        next: response => {
          console.log('Customer created successfully:', response);
          alert('Client ajouté avec succès.');
        },
        error: err => {
          console.error('Error creating customer:', err);
          alert('Une erreur est survenue lors de l’ajout du client.');
        }
      });
    } else if (this.user.role === 'administrator') {
      this.userService.createNewAdmin(this.user as Administrator).subscribe({
        next: response => {
          console.log('Admin created successfully:', response);
          alert('Administrateur ajouté avec succès.');
        },
        error: err => {
          console.error('Error creating admin:', err);
          alert("Une erreur est survenue lors de l'ajout de l'administrateur.");
        }
      });
    } else {
      alert('Rôle non pris en charge.');
    }
  }
  closeAlert(): void {
    this.alertMessage = null;
  }
  clearform(){
    this.clientForm.reset();

    this.loadClient();

  }
  private loadClient() {
      this.addressDetail=[
        {label:"Adresse",value:this.user.address.address},
        {label:"Ville",value:this.user.address.city},
        {label:"Code Postal",value:this.user.address.postalCode},
        {label:"Province",value:this.user.address.province},
        {label:"Pays",value:this.user.address.country}
      ]
      this.clientForm = this.fb.group({
        lastName: ['', Validators.required],
        firstName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required],
        addressDetails: this.fb.array(this.getAddressDetailControls()),
        role: ['', Validators.required],
        isDeleted:[null,[Validators.required]]
      });


  }
}
