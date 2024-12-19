import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';
import { CustomerService } from './customer.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:8080/auth/login';

  //sert à stocké le customerId pour aller le rechercher dans la confirmation de transaction
  private customerId = new BehaviorSubject<string | null>(null);

  constructor(private customerService: CustomerService, private http: HttpClient) { }

  logIntoAccount(email: string, password: string): Observable<any> {
    const payload = { email, password };
    return this.http.post(this.apiUrl, payload);
  }

  getCustomerId(): Observable<string | null>{
    return this.customerId.asObservable();
  }

  createAccount(name:string, email:string, pass:string){
        //later implement this with DB
    console.log(name + "\n" + email + "\n" + pass)
  }
}
