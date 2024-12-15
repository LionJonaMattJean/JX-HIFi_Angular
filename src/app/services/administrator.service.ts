import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Administrator} from '../models/Administrator';

@Injectable({
  providedIn: 'root'
})
export class AdministratorService {

  private url: string = "http://localhost:8080";
  constructor(private httpRequest: HttpClient) { };

  getallAdminitrators():Observable<Administrator[]>{
    return this.httpRequest.get<Administrator[]>(this.url + "/admin");
  }
  getAdministratorById(id: string): Observable<Administrator> {
    return this.httpRequest.get<Administrator>(this.url + "/admin/" + id);
  }

  updateAdministrator(payload:any, id: string): Observable<Administrator> {
    return this.httpRequest.put<Administrator>(this.url + "/admin/update/" + id, payload);
  }
  deleteAdministrator(id: string) {
    return this.httpRequest.delete(this.url + "/admin/delete/" + id);
  }
  createAdministrator(payload:any): Observable<Administrator> {
    return this.httpRequest.post<Administrator>(this.url + "/admin/new", payload);
  }

  deactivate(id: string,payload:any) {
    return this.httpRequest.put<Administrator>(this.url + "/admin/deactivate/" + id,payload);
  }
}
