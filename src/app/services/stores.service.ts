import { Injectable } from '@angular/core';

import { Observable} from 'rxjs';
import {Store} from '../models/Store';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StoresService {

  url = 'http://localhost:8080/api/stores';
  constructor(private http:HttpClient) { }

  getAllStores():Observable<Store[]> {
    return this.http.get<Store[]>(this.url);
  }
  createNewStore(store:Store):Observable<Store>{
    return this.http.post<Store>(this.url+"/create",store);
  }

  getStoreById(id:string):Observable<Store>{
    return this.http.get<Store>(this.url+"/"+id);
  }
  updateStore(store:any,id:string):Observable<Store>{
    return this.http.put<Store>(this.url+"/update/"+id,store);
  }
  deleteStore(id: string) {
    return this.http.delete(this.url + "/delete/" + id);
  }

}
