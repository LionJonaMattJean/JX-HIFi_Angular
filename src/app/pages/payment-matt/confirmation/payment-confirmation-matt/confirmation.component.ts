import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [FormsModule,CurrencyPipe,RouterLink,CommonModule],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})

export class ConfirmationComponent implements OnInit {
  userInfo: any = {};
  
  totalBeforeTax: number = 0; 
  tps: number = 0;  
  tvq: number = 0;  
  totalTtc: number = 0; 

  shoppingCart: any[] = [{name:'objet1', quantity:1, price: 20.00},
                         {name:'objet2', quantity:2, price: 15.00}, ]

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {

    const navigation = this.route.snapshot;

    if (navigation && navigation.root && navigation.root.children[0]?.data?.['userInfo']) {
      this.userInfo = navigation.root.children[0].data['userInfo'];
    } else {
    console.warn('Aucune donnée userInfo transmise via le routage.');
    // Ajout de valeurs par défaut pour éviter les erreurs dans le HTML
    this.userInfo = {
      name: 'Nom par défaut',
      address: 'Adresse par défaut',
    };
      console.log('Contenu de userInfo: ', this.userInfo)
      console.log('Contenu de shoppingCart : ', this.shoppingCart);


      this.totalTtc = this.totalBeforeTax + this.tps + this.tvq;

      // Calculer le total, des taxes et du TTC
      this.totalBeforeTax = this.shoppingCart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
      this.tps = this.totalBeforeTax * 0.07;
      this.tvq = this.totalBeforeTax * 0.08;
      this.totalTtc = this.totalBeforeTax + this.tps + this.tvq;
    }

  }
}