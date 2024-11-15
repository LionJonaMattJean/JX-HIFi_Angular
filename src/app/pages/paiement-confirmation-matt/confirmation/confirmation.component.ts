import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { OnInit } from '@angular/core';
import { SharedModule } from "../../../shared/shared.module";
import { FooterComponent } from '../../../shared/footer-lion/footer.component';
import { HeaderComponent } from '../../../shared/header-jean/header.component';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [FormsModule, NgFor, SharedModule,FooterComponent,HeaderComponent],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})

export class ConfirmationComponent implements OnInit {
  products = [  ]; //insertion de la logique d'ajout des items du shoping cart dans le tableau.

  constructor() {}

  ngOnInit(): void {}

}

