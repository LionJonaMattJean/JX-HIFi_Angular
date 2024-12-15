import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { User } from '../../../../models/User';
import {CustomerService} from '../../../../services/customer.service';
import {AdministratorService} from '../../../../services/administrator.service';

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
              private adminService: AdministratorService,) {}
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
    if(this.clientForm.invalid) {
      this.clientForm.markAllAsTouched();
      this.alertMessage = "Formulaire Invalide, veuillez remplir tous les champs.";
      this.alertType = 'alert-warning';
      this.logFormControls();
      return;
    }
    console.log('fuck')
    const formValue = this.clientForm.value;
    const payload = {
      id: "holder",
      lastName: formValue.lastName,
      firstName: formValue.firstName,
      password: formValue.password,
      email: formValue.email,
      phone: formValue.phone,
      isDeleted:false,
      role:formValue.role,
      address: {
        id:"holder",
        address:this.clientForm.get('addressDetails')?.get('0')?.get('value')?.value,
        city:this.clientForm.get('addressDetails')?.get('1')?.get('value')?.value,
        postalCode:this.clientForm.get('addressDetails')?.get('2')?.get('value')?.value,
        province:this.clientForm.get('addressDetails')?.get('3')?.get('value')?.value,
        country:this.clientForm.get('addressDetails')?.get('4')?.get('value')?.value
      }
    }

    if(formValue.role==="customer"){
      this.customerService.createCustomer(payload).subscribe({
        next:()=>{
          this.alertMessage="Le client a été créé avec Success !";
          this.alertType="alert-success";
          this.loadClient();
        },
        error:(error:any)=>{
          console.error('Error creating Magasin:', error);
          this.alertMessage = "Erreur lors de la création de l'utilisateur. Veuillez réessayer.";
          this.alertType = 'alert-danger';
          return;
        }
      })
    }else {
      this.adminService.createAdministrator(payload).subscribe({
        next:()=>{
          this.alertMessage="Le l'administrateur a ete creer avec Success !";
          this.alertType="alert-success";
          this.loadClient();
        },
        error:(error:any)=>{
          console.error('Error creating Magasin:', error);
          this.alertMessage = "Erreur lors de la creation administrateur. Veuillez réessayer.";
          this.alertType = 'alert-danger';
          return;
        }
      })
    }
    this.clearform();
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
        password: ['', [Validators.required, Validators.minLength(8)]],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required],
        addressDetails: this.fb.array(this.getAddressDetailControls()),
        role: ['', Validators.required],
        //isDeleted:[null,[Validators.required]]
      });
    console.log(this.addressDetails.controls);

  }

  private logFormControls() {
    // Log invalid state for main form controls
    console.log('Main Form Controls:');
    Object.keys(this.clientForm.controls).forEach(key => {
      const control = this.clientForm.get(key);
      console.log(`${key} is invalid:`, control?.invalid, ', errors:', control?.errors);
    });

    // Log invalid state for AddressDetails FormArray
    console.log('AddressDetails Controls:');
    const addressDetails = this.clientForm.get('addressDetails') as FormArray;
    addressDetails.controls.forEach((group, index) => {
      console.log(`AddressDetails[${index}]`);
      Object.keys((group as FormGroup).controls).forEach(innerKey => {
        const innerControl = group.get(innerKey);
        console.log(` - ${innerKey} is invalid:`, innerControl?.invalid, ', errors:', innerControl?.errors);
      });
    });
  }
}
