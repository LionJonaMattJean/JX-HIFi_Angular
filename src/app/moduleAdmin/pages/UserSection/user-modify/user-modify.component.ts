import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';

import {CustomerService} from '../../../../services/customer.service';

import {AdministratorService} from '../../../../services/administrator.service';
import {User} from '../../../../models/User';

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
  clientForm!:FormGroup;
  alertMessage: string | null = null;
  alertType: string = 'alert-success';
  currentRoute!:string ;
  constructor(private fb:FormBuilder,
              private customerService:CustomerService,
              private adminService:AdministratorService,
              private route:ActivatedRoute,
              private router:Router,) {}

  ngOnInit() {
    this.id=String(this.route.snapshot.paramMap.get('id'));
    this.currentRoute = this.router.url.split('/')[2];
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
  modifyUser() {
    if(this.clientForm.invalid) {
      this.clientForm.markAllAsTouched();
      this.alertMessage = "Formulaire Invalide, veuillez remplir tous les champs.";
      this.alertType = 'alert-warning';
      return;
    }
    const formValue = this.clientForm.value;

      const payload = {
        id: this.user?.id,
        lastName: formValue.lastName,
        firstName: formValue.firstName,
        email: formValue.email,
        phone: formValue.phone,
        isDeleted:formValue.isDeleted,
        role:this.user?.role,
        password:null,
        address: {
          id:this.user?.address?.id,
          address:this.clientForm.get('addressDetails')?.get('0')?.get('value')?.value,
          city:this.clientForm.get('addressDetails')?.get('1')?.get('value')?.value,
          postalCode:this.clientForm.get('addressDetails')?.get('2')?.get('value')?.value,
          province:this.clientForm.get('addressDetails')?.get('3')?.get('value')?.value,
          country:this.clientForm.get('addressDetails')?.get('4')?.get('value')?.value
        }
      }
      if (formValue.password && formValue.password.trim() !== '') {
        payload.password = formValue.password;
      }



    if(this.currentRoute === 'admins'){
      this.adminService.updateAdministrator(payload,this.id).subscribe({
        next:()=>{
          this.alertMessage="L'administrateur a été modifier avec Success !";
          this.alertType="alert-success";
          this.loadClient();
        },
        error:(error:any)=>{
          console.error('Error creating Magasin:', error);
          this.alertMessage = "Erreur lors de la modification de l'utilisateur. Veuillez réessayer.";
          this.alertType = 'alert-danger';
          return;
        }
      })
    }else{
      this.customerService.updateCustomer(payload,this.id).subscribe({
        next:()=>{
          this.alertMessage="Le client a été modifier avec Success !";
          this.alertType="alert-success";
          this.loadClient();
        },
        error:(error:any)=>{
          console.error('Error creating Magasin:', error);
          this.alertMessage = "Erreur lors de la modification de l'utilisateur. Veuillez réessayer.";
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

  if(this.currentRoute === 'admins'){
    this.adminService.getAdministratorById(this.id).subscribe(user=>{
      this.user=user;
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
        password: ['', [ Validators.minLength(8)]],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required],
        addressDetails: this.fb.array(this.getAddressDetailControls()),
        //  role: ['', Validators.required],
        isDeleted:[null,[Validators.required]]
      });
      if(this.user){
        console.log(this.user);
        this.clientForm.patchValue({
          lastName: this.user.lastName,
          firstName: this.user.firstName,
          password:this.user.password,
          email: this.user.email,
          phone: this.user.phone,
          addressDetails: this.addressDetail,
          isDeleted:this.user.isDeleted
        });
      }
    })
  }else{
    this.customerService.getCustomerById(this.id).subscribe(user=>{
      this.user=user;
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
        password: ['', [Validators.minLength(8)]],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required],
        addressDetails: this.fb.array(this.getAddressDetailControls()),

        //  role: ['', Validators.required],
        isDeleted:[null,[Validators.required]]
      });
      if(this.user){
        console.log(this.user);
        this.clientForm.patchValue({
          lastName: this.user.lastName,
          firstName: this.user.firstName,
          password:this.user.password,
          email: this.user.email,
          phone: this.user.phone,
          addressDetails: this.addressDetail,
          isDeleted:this.user.isDeleted
        });
      }
    })
  }

  }
}
