import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //sert à stocké le customerId pour aller le rechercher dans la confirmation de transaction
  private customerId = new BehaviorSubject<string | null>(null);

  constructor() { }

  logIntoAccount(email: string, pass:string,customerId: string): void{
    this.customerId.next(customerId);

    //later implement this with DB

    console.log(email + "\n" + pass + "\n" + customerId);
  }

  getCustomerId(): Observable<string | null>{
    return this.customerId.asObservable();
  }

  createAccount(name:string, email:string, pass:string){
        //later implement this with DB
    console.log(name + "\n" + email + "\n" + pass)
  }
}
