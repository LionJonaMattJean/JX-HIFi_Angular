import {Injectable} from '@angular/core';
import {ProductsService} from './products.service';
import {Observable, of} from 'rxjs';
import {Image} from '../models/Image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private static idNumber: number = 310100;
  images: Image[] = [];
  constructor() {
    this.getImages().subscribe(images=>{
      const temp=images[images.length-1].id
      ImageService.idNumber=parseInt(temp.substring(3),10)+3;
    })

  }

  generateId(): string {
    const id = "IMG" + ImageService.idNumber;
    ImageService.idNumber+=3;
    return id;
  }

   getImages():Observable<Image[]> {
    return of(this.images);
  }
}
