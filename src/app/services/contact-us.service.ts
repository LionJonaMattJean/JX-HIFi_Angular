import { Injectable } from '@angular/core';
import { ContactUs } from '../models/ContactUsForm';

@Injectable({
  providedIn: 'root'
})

export class ContactUsService {
  

  constructor() { }
  //Une fois DB implementer, utiliser la methode pour sauver ca dedans
  sendForm(fname: string, lname: string, pack: string, email: string, mess: string){
    console.log(
      fname + "\n" +
      lname + "\n" +
      pack + "\n" +
      email + "\n" +
      mess
    );
  }
}
