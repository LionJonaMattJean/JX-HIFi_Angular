import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TrackingService {
  constructor(private http: HttpClient) {}

  startTracking(orderId: string, email: string) {
    return this.http.post('/start-tracking', { orderId, email });
  }
}
