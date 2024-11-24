import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterLink} from '@angular/router';
import {filter} from 'rxjs';
import {NgIf} from '@angular/common';
import {TableDashboardComponent} from '../table-dashboard/table-dashboard.component';
import {ProductsService} from '../../../services/products.service';
import {CategoryService} from '../../../services/category.service';
import {PaginationDashboardComponent} from '../pagination-dashboard/pagination-dashboard.component';
import {UsersService} from '../../../services/users.service';


@Component({
  selector: 'app-main-card',
  standalone: true,
  imports: [

    NgIf,
    TableDashboardComponent,
    PaginationDashboardComponent,
    RouterLink,


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
  totalItems: number = 0;
  itemsPerPage: number = 10;
  currentPage: number = 1;
  totalPages: number=0;
  pageData!: any[];
  entityType!: string;
  urlAjout!: string;
  toggle!: string;
  isUser!: boolean;
  isOrder!: boolean;
  showDeactivated: boolean = false;

  constructor(private router:Router,
              public productsService:ProductsService,
              private categoriesService:CategoryService,
              private usersService:UsersService) { }

  ngOnInit() {
    this.router.events.pipe(
      filter(event=>event instanceof NavigationEnd)
    ).subscribe(()=>{
      this.updateHeaderText();
    });
    this.updateHeaderText();

  }

  updateHeaderText(){
    const currentRoute =this.router.url.split('/')[2];
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
    this.pageData = [];
    this.totalItems = 0;
    this.currentPage = 1;
    this.urlAjout="";
    this.entityType="";
    this.toggle="";
    this.isUser=false;
    this.isOrder=false;
  }

  setupAdmin(){
    this.headerText = "Tableau de bord";
    this.isNotIndex = false;
  }

  setupProducts() {
    this.headerText = "Gestion des produits";
    this.urlAjout = '/admin/products/ajout';
    this.isNotIndex = true;
    this.ajout = "Ajouter un produit";
    this.displayColumns = ['id', 'name', 'sellPrice', 'category'];
    this.entityType="products";
    this.columnNames = {
      id: 'ID',
      name: 'Nom',
      sellPrice: 'Prix de vente',
      category: 'Catégorie'
    };
    this.productsService.getAllProduct().subscribe(data =>{
      this.data = data;
      this.totalItems=data.length
      this.loadDataForPage();
      this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    });
  }

  setupCategories() {
    this.headerText = "Gestion des catégories";
    this.urlAjout = '/admin/categories/ajout';
    this.entityType="categories";
    this.isNotIndex = true;
    this.ajout="Ajouter une catégorie";
    this.displayColumns=['id','name','description'];
    this.columnNames={
      id:'ID',
      name:'Nom',
      description:'Description'
    }
    this.categoriesService.getCategories().subscribe(data=>
    {
      this.data = data;
      this.totalItems=data.length
      this.loadDataForPage();
      this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    });
  }

  setupOrders() { this.headerText = "Gestion des commandes";
    this.isNotIndex = true;
    this.ajout="Ajouter une commande";
  }

  setupUsers() {
    this.headerText = "Gestion des utilisateurs";
    this.isNotIndex = true;
    this.isUser=true;
    this.toggle=" Voir Utilisateurs désactivés";
    this.entityType="users";
    this.ajout = "Ajouter un utilisateur";
    this.urlAjout = '/admin/users/ajout';
    this.displayColumns = ['id','role' ,'firstName', 'lastName','address','email','phone'];
    this.columnNames = {
      id: 'ID',
      role: 'Rôle',
      firstName: 'Prénom',
      lastName: 'Nom',
      address: 'Adresse',
      email: 'Email',
      phone: 'Téléphone'
    };
    this.loadAllUser();
  }

  setupStores() {
    this.headerText = "Gestion des Magasins";
    this.isNotIndex = true;
    this.ajout="Ajouter un magasin";
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.loadDataForPage();
  }


  loadDataForPage(){
    const start=(this.currentPage-1)*this.itemsPerPage;
    const end=start+this.itemsPerPage;
    this.pageData=this.data.slice(start,end);
  }

  viewDeactivatedUser() {
    this.showDeactivated = !this.showDeactivated;
    if(this.showDeactivated){
      this.data=this.data.filter((data)=>data.isDeleted);
      this.toggle="Voir Utilisateurs actifs";
    }else {
      this.loadAllUser();
      this.toggle="Voir Utilisateur désactivés";
    }

    this.totalItems=this.data.length;
    this.loadDataForPage();
  }
  loadAllUser() {
    this.usersService.getUsers().subscribe(data =>{
      this.data=data;
      this.totalItems=data.length;
      this.loadDataForPage();
      this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);

    });
  }
}
