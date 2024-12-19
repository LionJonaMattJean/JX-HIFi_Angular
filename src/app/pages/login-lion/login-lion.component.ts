import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../services/login.service';
import { login } from '../../models/LogIn';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';

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
  router = inject(Router);

  logForm = new FormGroup({
    logEmail: new FormControl(''),
    logPassword: new FormControl('')
  })

  submitLogIn() {
    const email = this.logForm.value.logEmail ?? '';
    const password = this.logForm.value.logPassword ?? '';
  
    this.loginService.logIntoAccount(email, password).subscribe(
      (response: any) => {
        console.log('Connexion réussie', response);
        alert('Connexion réussie !');
        this.router.navigate(['/home']);
      },
      (error: any) => {
        console.error('Échec de la connexion', error);
        alert('Échec de la connexion : email ou mot de passe incorrect.');
      }
    );
  }
  




}
