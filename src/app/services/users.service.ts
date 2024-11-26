import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable, of} from 'rxjs';
import { User } from '../models/User';
import {Address} from '../models/Address';
import mockdata from '../../mockData/mock_json/users.mock.json'
@Injectable({
  providedIn: 'root'
})

export class UsersService {
  private dataLink: string = "src/mockData/mock_json/users.mock.json";
  private static idNumber: number = 1000;

  constructor(private httpRequest: HttpClient) {
    this.getUsers().subscribe(users=>{
      const temp=users[users.length-1].id;
      UsersService.idNumber=parseInt(temp.substring(3),10)+37;
    })
  };

  getUsers(): Observable<User[]> {
   // return this.httpRequest.get<User[]>(this.dataLink);
    return of(mockdata)
  }

  getUserById(id: string): Observable<User> {
    return this.getUsers().pipe(
      map(users => users.find(user => user.id === id)!)
    );
  }
  getUserByEmail(email: string): Observable<User> {
   return this.getUsers().pipe(
     map(users=>users.find((user=>user.email===email))!)
   )
  }
  login(): void {
    // Implement login logic here
  }

   logout(): void {
    // Implement logout logic here
  }

  generateId(): string {
    const id="USE"+UsersService.idNumber;
    UsersService.idNumber+=37;
    return id;
  }
 updateProfile(email: string, firstName: string, lastName: string, phone: string, address: Address): void {
    /*todo Add logic changing this Address*/

    /*  this._email = email;
      this._firstName = firstName;
      this._lastName = lastName;
      this._phone = phone;
      this._address = address;*/
  }
  /*todo Add logic for the encryptage*/
  changePassword(password:string): void {
    //logic for the encryptage
    // this._password = password;
  }
}
