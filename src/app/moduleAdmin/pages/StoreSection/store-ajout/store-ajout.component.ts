import { Component } from '@angular/core';
import {Store} from '../../../../models/Store';
import {FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {StoresService} from '../../../../services/stores.service';

@Component({
  selector: 'app-store-ajout',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './store-ajout.component.html',
  styleUrl: './store-ajout.component.css'
})
export class StoreAjoutComponent {
store!:Store;
storeForm!:FormGroup;
   alertMessage: string="";
   alertType:string ="";

  constructor(private fb:FormBuilder,private storeService:StoresService) {
    this.store = {
      id: '',
      name: '',
      address: {
        id:'',
        address: '',
        city: '',
        postalCode: '',
        province: '',
        country: ''
      },
      telephone: '',
      email: '',
      manager: ''
    };
    this.storeForm = this.fb.group({
      name: ['', Validators.required],
      addressDetails: this.fb.array(this.getAddressDetailControls()),
      telephone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      manager: ['', Validators.required]
    });

  }
  private getAddressDetailControls() {
    const address = this.store.address;
    return [
      this.fb.group({label: 'Adresse', value: [address.address, Validators.required]}),
      this.fb.group({label: 'Ville', value: [address.city, Validators.required]}),
      this.fb.group({label: 'Code Postal', value: [address.postalCode, Validators.required]}),
      this.fb.group({label: 'Province', value: [address.province, Validators.required]}),
      this.fb.group({label: 'Pays', value: [address.country, Validators.required]})
    ];
  }
  get addressDetails() {
    return this.storeForm.get('addressDetails') as FormArray;
  }


  onSummit() {
    if(this.storeForm.invalid) {

      this.storeForm.markAllAsTouched();
      this.alertMessage = "Formulaire Invalide, veuillez remplir tous les champs.";
      this.alertType = 'alert-warning';
      return;
    }

    this.store.address={
      id:'holder',
      address:this.storeForm.get('addressDetails')?.get('0')?.get('value')?.value,
      city:this.storeForm.get('addressDetails')?.get('1')?.get('value')?.value,
      postalCode:this.storeForm.get('addressDetails')?.get('2')?.get('value')?.value,
      province:this.storeForm.get('addressDetails')?.get('3')?.get('value')?.value,
      country:this.storeForm.get('addressDetails')?.get('4')?.get('value')?.value
    }
    this.store.id='holder';
    this.store.name=this.storeForm.get('name')?.value;
    this.store.telephone=this.storeForm.get('telephone')?.value;
    this.store.email=this.storeForm.get('email')?.value;
    this.store.manager=this.storeForm.get('manager')?.value;

    this.storeService.createNewStore(this.store).subscribe({
      next:(data:any)=>{
        console.log("Store créer avec succes "+data);
        this.alertMessage="Magasin créé avec Success !";
        this.alertType="alert-success";
      },
      error: (error: any) => {
        console.error('Error creating Magasin:', error);
        this.alertMessage = "Erreur lors de l'ajout du Magasin. Veuillez réessayer.";
        this.alertType = 'alert-danger';
        return;
      }

    })
    this.clearform();

  }
  closeAlert(): void {
    this.alertMessage = "";
  }
  clearform(){
    this.storeForm.reset();
    location.reload();
  }
}
