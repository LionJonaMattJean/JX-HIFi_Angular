import { Component, inject } from '@angular/core';
import { ContactUs } from '../../models/ContactUsForm';
import { ContactUsService } from '../../services/contact-us.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-support-lion',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './support-lion.component.html',
  styleUrl: './support-lion.component.css'
})
export class SupportLionComponent {
  contactService = inject(ContactUsService);
  contactForm: ContactUs| undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    package: new FormControl(''),
    message: new FormControl('')
  })

  submitForm(){
    this.contactService.sendForm(
      this.applyForm.value.firstName?? '',
      this.applyForm.value.lastName?? '',
      this.applyForm.value.package?? '',
      this.applyForm.value.email?? '',
      this.applyForm.value.message?? ''

    )
  }

  constructor(){}



}
