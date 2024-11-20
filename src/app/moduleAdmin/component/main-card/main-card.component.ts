import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs';
import {NgIf} from '@angular/common';
import {TableDashboardComponent} from '../table-dashboard/table-dashboard.component';
import {ProductsService} from '../../../services/products.service';
import {CategoryService} from '../../../services/category.service';

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
  constructor(private router:Router,private productsService:ProductsService,private categoriesService:CategoryService) { }

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
    this.resetDefaults();
    switch (currentRoute) {
      case 'indexAdmin':
       this.setupAdmin();
        break;
      case 'users':
        this.setupUsers();
        break;
      case 'products':
        this.setupProducts();
        break;
      case 'categories':
       this.setupCategories();
        break;
      case 'orders':
       this.setupOrders();
        break;
      case'stores':
       this.setupStores();
        break;
    }
  }

  resetDefaults() {
    this.headerText = "Tableau de bord";
    this.isNotIndex = false;
    this.ajout = "Ajouter";
    this.displayColumns = [];
    this.columnNames = {};
    this.data = [];
  }

  setupAdmin(){
    this.headerText = "Tableau de bord";
    this.isNotIndex = false;
  }

  setupProducts() {
    this.headerText = "Gestion des produits";
    this.isNotIndex = true;
    this.ajout = "Ajouter un produit";
    this.displayColumns = ['id', 'name', 'sellPrice', 'category'];
    this.columnNames = {
      id: 'ID',
      name: 'Nom',
      sellPrice: 'Prix de vente',
      category: 'Catégorie'
    };
    this.productsService.getProducts().subscribe(data => this.data = data);
  }

  setupCategories() {
    this.headerText = "Gestion des catégories";
    this.isNotIndex = true;
    this.ajout="Ajouter une catégorie";
    this.displayColumns=['id','name','description'];
    this.columnNames={
      id:'ID',
      name:'Nom',
      description:'Description'
    }
    this.categoriesService.getCategories().subscribe(data=>this.data=data);
  }

  setupOrders() { this.headerText = "Gestion des commandes";
    this.isNotIndex = true;
    this.ajout="Ajouter une commande";
  }

  setupUsers() {
    this.headerText = "Gestion des utilisateurs";
    this.isNotIndex = true;
    this.ajout = "Ajouter un utilisateur";
  }

  setupStores() {
    this.headerText = "Gestion des Magasins";
    this.isNotIndex = true;
    this.ajout="Ajouter un magasin";
  }

  onEdit(row:any) {
    console.log('Modifier:', row);
  }

  onDetails(row: any) {
    console.log('Détails:', row);
  }

  onDelete(row: any) {
    console.log('Supprimer:', row);
    this.data = this.data.filter(d => d.id !== row);
  }
}
