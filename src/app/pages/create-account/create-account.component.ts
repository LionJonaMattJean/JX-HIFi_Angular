import { Component, inject } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { login } from '../../models/LogIn';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {
  loginService = inject(LoginService);
  loginObject: login|undefined;

  createForm = new FormGroup({
    enterName: new FormControl(''),
    enterEmail: new FormControl(''),
    createPassword: new FormControl(''),
    confirmPassword: new FormControl('')
  })

  createAccount(){
    if(this.createForm.value.createPassword == this.createForm.value.confirmPassword)
    {
      this.loginService.createAccount(
        this.createForm.value.enterName?? '',
        this.createForm.value.enterEmail?? '',
        this.createForm.value.confirmPassword?? ''
      )
    }
    else{
      alert("Error: your passwords don't match, please try again");
      return;
    }
    //else return error to user
  }

}
