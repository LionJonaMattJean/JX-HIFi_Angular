import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterLink} from '@angular/router';
import {filter, Subject, takeUntil} from 'rxjs';
import {NgIf} from '@angular/common';
import {TableDashboardComponent} from '../table-dashboard/table-dashboard.component';
import {ProductsService} from '../../../services/products.service';
import {CategoryService} from '../../../services/category.service';
import {PaginationDashboardComponent} from '../pagination-dashboard/pagination-dashboard.component';
import {UsersService} from '../../../services/users.service';
import {StoresService} from '../../../services/stores.service';
import {OrderService} from '../../../services/order.service';


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
export class MainCardComponent implements OnInit,OnDestroy{
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

  isLoading: boolean = false;
  loadingMessage: string = "Chargement des données...";

  private destroy$ = new Subject<void>();

  constructor(private router:Router,
              public productsService:ProductsService,
              private categoriesService:CategoryService,
              private usersService:UsersService,
              private storesService:StoresService,
              private orderService:OrderService) { }

  ngOnInit() {
    this.router.events.pipe(
      filter(event=>event instanceof NavigationEnd)
    ).subscribe(()=>{
      this.updateHeaderText();
    });
    this.updateHeaderText();
    this.loadDataForCurrentRoute();
  }
  ngOnDestroy() {
    // Cancel all subscriptions
    this.destroy$.next();
    this.destroy$.complete();
  }

  private startLoading() {
    this.isLoading = true;
  }

  private stopLoading() {
    this.isLoading = false;
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
    this.loadAllProduct();
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
    this.loadAllCategory();
  }

  setupOrders() { this.headerText = "Gestion des commandes";
    this.isNotIndex = true;
    this.ajout="Ajouter une commande";
    this.entityType="orders";
    this.urlAjout = '/admin/orders/ajout';
    this.displayColumns=['id','orderDate','totalItems','totalAmount','status','idCustomer','email'];
    this.columnNames={
      id:'ID',
      orderDate:'Date de commande',
      totalItems:'Nombre de produits',
      totalAmount:'Total',
      status:'Statut',
      idCustomer:'ID Client',
      email:'Email'
    };

    this.loadAllOrder();
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
    this.entityType="stores";
    this.urlAjout = '/admin/stores/ajout';
    this.displayColumns=['id','address','telephone','email','manager'];
    this.columnNames={
      id:'ID',
      address:'Adresse',
      telephone:'Téléphone',
      email:'Email',
      manager:'Manager'
    }
    this.loadAllStore();
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

  loadAllCategory() {
    this.startLoading();
    this.categoriesService.getCategories()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          this.data = data;
          this.totalItems = data.length;
          this.loadDataForPage();
          this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
          this.stopLoading();
        },
        error: (error) => {
          console.error('Error loading categories', error);
          this.stopLoading();
          // Optional: Set an error message
          this.loadingMessage = "Erreur de chargement des données";
        }
      });
  }

  loadAllProduct() {
    this.startLoading();
    this.productsService.getAllProduct()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          this.data = data;
          this.totalItems = data.length;
          this.loadDataForPage();
          this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
          this.stopLoading();
        },
        error: (error) => {
          console.error('Error loading products', error);
          this.stopLoading();
          this.loadingMessage = "Erreur de chargement des données";
        }
      });
  }

  loadAllUser() {
    this.startLoading();
    this.usersService.getUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          this.data = data;
          this.totalItems = data.length;
          this.loadDataForPage();
          this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
          this.stopLoading();
        },
        error: (error) => {
          console.error('Error loading users', error);
          this.stopLoading();
          this.loadingMessage = "Erreur de chargement des données";
        }
      });
  }

  loadAllOrder() {
    this.startLoading();
    this.orderService.getOrders()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          this.data = data;
          this.totalItems = data.length;
          this.loadDataForPage();
          this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
          this.stopLoading();
        },
        error: (error) => {
          console.error('Error loading orders', error);
          this.stopLoading();
          this.loadingMessage = "Erreur de chargement des données";
        }
      });
  }

  loadAllStore() {
    this.startLoading();
    this.storesService.getAllStores()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          this.data = data;
          this.totalItems = data.length;
          this.loadDataForPage();
          this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
          this.stopLoading();
        },
        error: (error) => {
          console.error('Error loading stores', error);
          this.stopLoading();
          this.loadingMessage = "Erreur de chargement des données";
        }
      });
  }

  private loadDataForCurrentRoute() {
    const currentRoute = this.router.url.split('/')[2];
    switch (currentRoute) {
      case 'products':
        this.loadAllProduct();
        break;
      case 'categories':
        this.loadAllCategory();
        break;
      case 'users':
        this.loadAllUser();
        break;
      case 'orders':
        this.loadAllOrder();
        break;
      case 'stores':
        this.loadAllStore();
        break;
      default:

        break;
    }
  }
}
