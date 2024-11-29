import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  logIntoAccount(email: string, pass:string){
    console.log(email + "\n" + pass);
  }

  createAccount(name:string, email:string, pass:string){
    console.log(name + "\n" + email + "\n" + pass)
  }
}
