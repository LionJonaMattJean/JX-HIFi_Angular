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
  
    console.log('Données envoyées :', { email, password });
  
    this.loginService.logIntoAccount(email, password).subscribe({
      next: (response: any) => {
        console.log('Connexion réussie', response);
        alert('Connexion réussie !');
        this.router.navigate(['/home']);
      },
      error: (error: any) => {
        console.error('Erreur de connexion :', error);
        if (error.status === 401) {
          alert('Échec de la connexion : email ou mot de passe incorrect.');
        } else {
          alert('Une erreur est survenue. Veuillez réessayer plus tard.');
        }
      },
    });
  }
  
  




}
