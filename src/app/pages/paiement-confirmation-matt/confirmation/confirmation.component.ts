import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})

export class ConfirmationComponent implements OnInit {
  products = [ ];

  memeAdress = false;

  constructor() {}

  ngOnInit(): void {}

  toggleLivraisonFields(): void {
    this.memeAdress = !this.memeAdress;
  }
}

