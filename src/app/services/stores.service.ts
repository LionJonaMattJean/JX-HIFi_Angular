import { Injectable } from '@angular/core';
import mockdata from '../../mockData/mock_json/stores.mock.json';
import {map, Observable, of} from 'rxjs';
import {Store} from '../models/Store';
@Injectable({
  providedIn: 'root'
})
export class StoresService {

  constructor() { }

  getAllStores():Observable<Store[]> {
    return of(mockdata);
  }

  getStoreById(id:string):Observable<Store>{
    return this.getAllStores().pipe(
      map(stores=>stores.find((store=>store.id===id))!)
    )
  }
}
