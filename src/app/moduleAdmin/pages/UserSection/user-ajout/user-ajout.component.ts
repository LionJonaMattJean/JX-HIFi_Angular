import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { User } from '../../../../models/User';
import { UsersService } from '../../../../services/users.service';
import { Customer } from '../../../../models/Customer';
import { Administrator } from '../../../../models/Administrator';

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
export class UserAjoutComponent {
  userService = inject(UsersService);
  user?: User;
  addressDetail?: { label: string, value: string }[] = []
  constructor() {
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

    this.addressDetail! = [
      { label: "Adresse", value: this.user.address.address },
      { label: "Ville", value: this.user.address.city },
      { label: "Code Postal", value: this.user.address.postalCode },
      { label: "Province", value: this.user.address.province },
      { label: "Pays", value: this.user.address.country }
    ]
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

}
