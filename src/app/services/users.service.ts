import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { User } from '../models/User';
import { Address } from '../models/Address';
import { Customer } from '../models/Customer';
import { Administrator } from '../models/Administrator';
// import mockdata from '../../mockData/mock_json/users.mock.json'

@Injectable({
  providedIn: 'root'
})

export class UsersService {


  private url: string = "http://localhost:8080";

  constructor(private httpRequest: HttpClient) { };

  createNewCustomerAccount(newCustomer: Customer): Observable<Customer> {
    return this.httpRequest.post<Customer>(this.url + "/customer/newaccount", newCustomer);
  }



  createNewAdmin(newAdmin: Administrator): Observable<Administrator> {
    return this.httpRequest.post<Administrator>(this.url + "/admin/new", newAdmin);
  }












  // ANCIENNE METHODE
  // TODO trier et supprimer les methodes inutiles
  getUsers(): Observable<User[]> {
    // return this.httpRequest.get<User[]>(this.dataLink);
    // return of(mockdata)
    return of();
  }

  getUserById(id: string): Observable<User> {
    return this.getUsers().pipe(
      map(users => users.find(user => user.id === id)!)
    );
  }
  getUserByEmail(email: string): Observable<User> {
    return this.getUsers().pipe(
      map(users => users.find((user => user.email === email))!)
    )
  }
  login(username: string, password: string): void {
    // Implement login logic here
  }

  logout(): void {
    // Implement logout logic here
  }

  // generateId(): string {
  //   const id = "USE" + UsersService.idNumber;
  //   UsersService.idNumber += 37;
  //   return id;
  // }
  updateProfile(email: string, firstName: string, lastName: string, phone: string, address: Address): void {
    /*todo Add logic changing this Address*/

    /*  this._email = email;
      this._firstName = firstName;
      this._lastName = lastName;
      this._phone = phone;
      this._address = address;*/
  }
  /*todo Add logic for the encryptage*/
  changePassword(password: string): void {
    //logic for the encryptage
    // this._password = password;
  }
}
