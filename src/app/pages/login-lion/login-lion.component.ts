import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../services/login.service';
import { login } from '../../models/LogIn';

@Component({
  selector: 'app-login-lion',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-lion.component.html',
  styleUrl: './login-lion.component.css'
})
export class LoginLionComponent {
  loginService = inject(LoginService);
  loginObject: login|undefined;

  logForm = new FormGroup({
    logEmail: new FormControl(''),
    logPassword: new FormControl('')
  })

  submitLogIn(){
    this.loginService.logIntoAccount(
    this.logForm.value.logEmail?? '',
    this.logForm.value.logPassword?? ''
    )
  }


}
