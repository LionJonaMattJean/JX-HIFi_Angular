import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private apiURL = 'http://localhost:'

  constructor(private http:HttpClient) { }

  savePaymentDetails(details: any){
    return this.http.post(`${this.apiURL}`, details)
  }
}
