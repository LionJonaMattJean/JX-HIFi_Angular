import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {Administrator} from '../../../models/Administrator';

import {AdministratorService} from '../../../services/administrator.service';


@Component({
  selector: 'app-parameter',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './parameter.component.html',
  styleUrl: './parameter.component.css'
})
export class ParameterComponent implements OnInit {
  id: string = "";
  user?:Administrator;
  addressDetail?:{label:string,value:string}[]=[]
  paraForm!:FormGroup;
  alertMessage: string | null = null;
  alertType: string = 'alert-success';

  constructor(private fb:FormBuilder,
              private adminService:AdministratorService,
              private route:ActivatedRoute,
             ) {}

  ngOnInit(){
   // this.id=String(this.route.snapshot.paramMap.get('idAdmin'));
    this.id="ADM1";
    this.adminService.getAdministratorById(this.id).subscribe(admin=>{
      this.user=admin;
      this.addressDetail=[
        {label:"Adresse",value:this.user.address.address},
        {label:"Ville",value:this.user.address.city},
        {label:"Code Postal",value:this.user.address.postalCode},
        {label:"Province",value:this.user.address.province},
        {label:"Pays",value:this.user.address.country}
      ]
    });
    this.loadParameter();
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
    return this.paraForm.get('addressDetails') as FormArray;
  }
  closeAlert(): void {
    this.alertMessage = null;
  }
  clearform(){
    this.paraForm.reset();

    this.loadParameter();

  }
  private loadParameter() {


      this.adminService.getAdministratorById(this.id).subscribe(user=>{
        this.user=user;
        this.addressDetail=[
          {label:"Adresse",value:this.user.address.address},
          {label:"Ville",value:this.user.address.city},
          {label:"Code Postal",value:this.user.address.postalCode},
          {label:"Province",value:this.user.address.province},
          {label:"Pays",value:this.user.address.country}
        ]
        this.paraForm = this.fb.group({
          lastName: ['', Validators.required],
          firstName: ['', Validators.required],
          password: ['', [ Validators.minLength(8)]],
          email: ['', [Validators.required, Validators.email]],
          phone: ['', Validators.required],
          addressDetails: this.fb.array(this.getAddressDetailControls()),

          isDeleted:[null,[Validators.required]]
        });
        if(this.user){

          this.paraForm.patchValue({
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

  modifyPara() {
    if(this.paraForm.invalid) {
      this.paraForm.markAllAsTouched();
      this.alertMessage = "Formulaire Invalide, veuillez remplir tous les champs.";
      this.alertType = 'alert-warning';
      return;
    }
    const formValue = this.paraForm.value;

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
        address:this.paraForm.get('addressDetails')?.get('0')?.get('value')?.value,
        city:this.paraForm.get('addressDetails')?.get('1')?.get('value')?.value,
        postalCode:this.paraForm.get('addressDetails')?.get('2')?.get('value')?.value,
        province:this.paraForm.get('addressDetails')?.get('3')?.get('value')?.value,
        country:this.paraForm.get('addressDetails')?.get('4')?.get('value')?.value
      }
    }
    if (formValue.password && formValue.password.trim() !== '') {
      payload.password = formValue.password;
    }




      this.adminService.updateAdministrator(payload,this.id).subscribe({
        next:()=>{
          this.alertMessage="L'administrateur a été modifier avec Success !";
          this.alertType="alert-success";
          this.loadParameter();
        },
        error:(error:any)=>{
          console.error('Error creating Magasin:', error);
          this.alertMessage = "Erreur lors de la modification de l'utilisateur. Veuillez réessayer.";
          this.alertType = 'alert-danger';
          return;
        }
      })




    this.clearform();
  }
}
