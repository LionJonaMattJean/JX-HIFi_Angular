import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Customer } from '../../models/Customer';
import { UsersService } from '../../services/users.service';
import { LoginService } from '../../services/login.service';
import { login } from '../../models/LogIn';

interface CreateForm {
  enterName: FormControl<string | null>;
  enterEmail: FormControl<string | null>;
  createPassword: FormControl<string | null>;
  confirmPassword: FormControl<string | null>;
}

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {
  // loginService = inject(LoginService);
  // loginObject: login | undefined;
  userService= inject(UsersService);
  customer: Customer;

  createForm: FormGroup<CreateForm> = new FormGroup({
    enterName: new FormControl<string | null>(null),
    enterEmail: new FormControl<string | null>(null),
    createPassword: new FormControl<string | null>(null),
    confirmPassword: new FormControl<string | null>(null),
  });


  constructor() {
    this.customer = {
      id: '',
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      password: '',
      role: '',
      isDeleted: false,
      address: {
        id: '',
        address: '',
        city: '',
        postalCode: '',
        province: '',
        country: ''
      },
      orders: [],
    };
  }

  createAccount() {
    //if both passwords match, then we create account
    if (this.createForm.value.createPassword == this.createForm.value.confirmPassword) {
      this.customer.firstName = this.createForm.get('enterName')?.value || '';
      this.customer.email = this.createForm.get('enterEmail')?.value || '';
      this.customer.password = this.createForm.get('confirmPassword')?.value || '';

      this.userService.createNewCustomerAccount(this.customer).subscribe({
        next: (data: any) => {
          alert("Account succesfully created.");
        },
        error: (error: any) => {
          console.error('Error creating new customer:', error);
          return;
        }
      });
      this.createForm.reset();
    }
    else {
      //maybe use modals later on for alerts to be a little cleaner?
      alert("Error: your passwords don't match, please try again.");
      return;
    }
  }
}