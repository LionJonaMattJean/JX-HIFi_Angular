import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs';
import {NgIf} from '@angular/common';
import {TableDashboardComponent} from '../table-dashboard/table-dashboard.component';
import {ProductsService} from '../../../services/products.service';

@Component({
  selector: 'app-main-card',
  standalone: true,
  imports: [

    NgIf,
    TableDashboardComponent,

  ],
  templateUrl: './main-card.component.html',
  styleUrl: '../../style-admin.css'
})
export class MainCardComponent implements OnInit{
  headerText: string = "Tableau de bord";
  ajout: string="Ajouter";
  isNotIndex: boolean=false;
  displayColumns!: string[];
  columnNames: { [key: string]: string } = {};
  data!: any[];
  constructor(private router:Router,private productsService:ProductsService) { }

  ngOnInit() {
    this.router.events.pipe(
      filter(event=>event instanceof NavigationEnd)
    ).subscribe(()=>{
      this.updateHeaderText();
    });
    this.updateHeaderText();

  }

  updateHeaderText(){
    const currentRoute =this.router.url.split('/').pop();
    console.log(currentRoute);
    switch (currentRoute) {
      case 'indexAdmin':
        this.headerText = "Tableau de bord";
        this.isNotIndex = false;
        break;
      case 'users':
        this.headerText = "Gestion des utilisateurs";
        this.isNotIndex = true;
        this.ajout="Ajouter un utilisateur";
        break;
      case 'products':
        this.headerText = "Gestion des produits";
        this.isNotIndex = true;
        this.ajout="Ajouter un produit";
        this.displayColumns=['id','name','sellPrice','category'];
        this.columnNames={
          id:'ID',
          name:'Nom',
          sellPrice:'Prix de vente',
          category:'Catégorie'
        }
        this.productsService.getProducts().subscribe(data=>this.data=data);
        break;
      case 'categories':
        this.headerText = "Gestion des catégories";
        this.isNotIndex = true;
        this.ajout="Ajouter une catégorie";
        break;
      case 'orders':
        this.headerText = "Gestion des commandes";
        this.isNotIndex = true;
        this.ajout="Ajouter une commande";
        break;
      case'stores':
        this.headerText = "Gestion des Magasins";
        this.isNotIndex = true;
        this.ajout="Ajouter un magasin";
        break;
    }
  }

  onEdit(row:any) {
    console.log('Modifier:', row);
  }

  onDetails(row: any) {
    console.log('Détails:', row);
  }

  onDelete(row: any) {
    console.log('Supprimer:', row.id);
    this.data = this.data.filter(d => d.id !== row.id);
  }
}
