import {Component, OnInit} from '@angular/core';
import {Store} from '../../../../models/Store';
import {StoresService} from '../../../../services/stores.service';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';


@Component({
  selector: 'app-store-modify',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './store-modify.component.html',
  styleUrl: './store-modify.component.css'
})
export class StoreModifyComponent implements OnInit{
  id:string = "";
  store?:Store;
  addressDetail?:{label:string,value:string}[]=[]
  alertMessage: string = "";
  alertType: string = "";
  storeForm!: FormGroup;


  constructor(private storesService:StoresService,
              private route:ActivatedRoute,private fb:FormBuilder) {
  }

  ngOnInit() {
    this.id=String(this.route.snapshot.paramMap.get('id'));

      this.loadStore();

  }


  onSummit() {
    if(this.storeForm.invalid) {

      this.storeForm.markAllAsTouched();
      this.alertMessage = "Formulaire Invalide, veuillez remplir tous les champs.";
      this.alertType = 'alert-warning';
      return;
    }
    const formValue = this.storeForm.value;
    const payload = {
      id: this.store?.id,
      name: formValue.name,
      address: {
        id:this.store?.address?.id,
        address:this.storeForm.get('addressDetails')?.get('0')?.get('value')?.value,
        city:this.storeForm.get('addressDetails')?.get('1')?.get('value')?.value,
        postalCode:this.storeForm.get('addressDetails')?.get('2')?.get('value')?.value,
        province:this.storeForm.get('addressDetails')?.get('3')?.get('value')?.value,
        country:this.storeForm.get('addressDetails')?.get('4')?.get('value')?.value
      },
      telephone: formValue.telephone,
      email: formValue.email,
      manager: formValue.manager,
    };
    this.storesService.updateStore(payload,this.id).subscribe({
      next:(data:Store)=>{
        console.log("Store modifié avec succes "+data);
        this.alertMessage="Magasin modifié avec Success !";
        this.alertType="alert-success";
        this.loadStore();
      },
      error: (error: any) => {
        console.log(payload);
        console.error('Error creating Magasin:', error);
        this.alertMessage = "Erreur lors de la modification du Magasin. Veuillez réessayer.";
        this.alertType = 'alert-danger';
        return;
      }
      }
    )
      this.clearform();
  }
  private getAddressDetailControls() {
    const address = this.store?.address;
    return [
      this.fb.group({label: 'Adresse', value: [address?.address, Validators.required]}),
      this.fb.group({label: 'Ville', value: [address?.city, Validators.required]}),
      this.fb.group({label: 'Code Postal', value: [address?.postalCode, Validators.required]}),
      this.fb.group({label: 'Province', value: [address?.province, Validators.required]}),
      this.fb.group({label: 'Pays', value: [address?.country, Validators.required]})
    ];
  }
  get addressDetails() {
    return this.storeForm.get('addressDetails') as FormArray;
  }
  closeAlert(): void {
    this.alertMessage = "";
  }
  clearform(){
    this.storeForm.reset();
    this.loadStore();

  }

 loadStore(){

      this.storesService.getStoreById(this.id)
        .subscribe(store=>{
        this.store=store;
        this.addressDetail=[
          {label:"Adresse",value:this.store.address.address},
          {label:"Ville",value:this.store.address.city},
          {label:"Code Postal",value:this.store.address.postalCode},
          {label:"Province",value:this.store.address.province},
          {label:"Pays",value:this.store.address.country}
        ]
        this.storeForm = this.fb.group({
          name: ['', Validators.required],
          addressDetails: this.fb.array(this.getAddressDetailControls()),
          telephone: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          manager: ['', Validators.required]
        });
        if(this.store){
          this.storeForm.patchValue({
            name: this.store.name,
            addressDetails: this.addressDetail,
            telephone: this.store.telephone,
            email: this.store.email,
            manager: this.store.manager
          });

        }
      });
  }
}
