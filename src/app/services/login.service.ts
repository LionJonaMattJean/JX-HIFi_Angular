import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  logIntoAccount(email: string, pass:string){
    //later implement this with DB
    console.log(email + "\n" + pass);
  }

  createAccount(name:string, email:string, pass:string){
        //later implement this with DB
    console.log(name + "\n" + email + "\n" + pass)
  }
}
