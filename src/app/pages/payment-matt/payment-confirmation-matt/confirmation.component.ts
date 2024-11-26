import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { OrderService } from '../../../services/order.service';
import { ShoppingCartService } from '../../../services/shopping-cart.service';


@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})

export class ConfirmationComponent implements OnInit {
  order: any;
  useShippingAddress: boolean = false; 


  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getOrders().subscribe(data => {
      this.order = data[0];
    });
  }

  //changer l'adresse de livraison si le check box est checked
  toggleAddress(useShippingAddress: boolean) {
    this.useShippingAddress = useShippingAddress;
  }
  /*
    ajustement dans la logique pour aller chercher les items du shopping cart pour afficher dans le tableau

  afficherPanier() {
    const tbody = document.querySelector('#panier-table-body') as HTMLElement;
    this.orderService.getOrderById(items => {
      const tr = document.createElement('tr');

      // Créer la cellule pour l'image
      const tdImage = document.createElement('td');
      const img = document.createElement('img');
      img.src = items.image;
      img.alt = items.description;
      img.style.width = '100px'; 
      tdImage.appendChild(img);

      // Créer la cellule pour la description
      const tdDescription = document.createElement('td');
      tdDescription.textContent = items.description;

      // Ajouter les cellules au tableau
      tr.appendChild(tdImage);
      tr.appendChild(tdDescription);
      tbody.appendChild(tr);
    });

  }*/

}

