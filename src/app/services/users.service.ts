import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
  
export class UsersService {
  private dataLink: string = "src/mockData/mock_json/users.mock.json";

  constructor(private httpRequest: HttpClient) { };

  getUsers(): Observable<User[]> {
    return this.httpRequest.get<User[]>(this.dataLink);
  }
}
