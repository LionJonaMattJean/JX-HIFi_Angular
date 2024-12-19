import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface LoginResponse {
  customerId: string;

  token?: string;
}


@Injectable({
  providedIn: 'root'
})


export class LoginService {

  private apiUrl = 'http://localhost:8080/auth/login';

  private customerId = new BehaviorSubject<string|null>(null);

    constructor(private http: HttpClient) { }

  setCustomerId(id: string) {
    this.customerId.next(id);
  }
  getCustomerId(): Observable<string | null>{
    return this.customerId.asObservable();
  }

  logIntoAccount(email: string, password: string): Observable<any> {
    const payload = { email, password };

    return this.http.post<any>(this.apiUrl, payload).pipe(
      tap(response => {
        console.log('Réponse brute du serveur:', response); 

        if (response && response.customerId) {
          this.setCustomerId(response.customerId);
        } else {
          console.error('ID client non trouvé dans la réponse');
        }
      })
    );
  }

  createAccount(name:string, email:string, pass:string){
        //later implement this with DB
    console.log(name + "\n" + email + "\n" + pass)
  }
}
