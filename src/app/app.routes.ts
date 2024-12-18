import { Routes } from '@angular/router';

import { AdminDashboardComponent } from './moduleAdmin/pages/admin-dashboard/admin-dashboard.component';
import { MainSiteComponent } from './pages/main-site/main-site.component';
import { CategoriesDashboardComponent } from './moduleAdmin/pages/CategorySection/categories-dashboard/categories-dashboard.component';
import { UsersDashboardComponent } from './moduleAdmin/pages/UserSection/users-dashboard/users-dashboard.component';
import { ProductsDashboardComponent } from './moduleAdmin/pages/produitSection/products-dashboard/products-dashboard.component';
import { OrdersDashboardComponent } from './moduleAdmin/pages/OrderSection/orders-dashboard/orders-dashboard.component';
import { StoreDashboardComponent } from './moduleAdmin/pages/StoreSection/store-dashboard/store-dashboard.component';
import { SupportLionComponent } from './pages/support-lion/support-lion.component';
import { AdminLayoutComponent } from './moduleAdmin/pages/layout/admin-layout/admin-layout.component';
import { AcceuilLionComponent } from './pages/acceuil-lion/acceuil-lion.component';
import { CatProductDisplayComponent } from './pages/detail-category-jean/cat-product-display/cat-product-display.component';
import { DetailProductParentJeanComponent } from './pages/detail-product-jean/detail-product-parent-jean/detail-product-parent-jean.component';
import { ProduitsDetailComponent } from './moduleAdmin/pages/produitSection/produits-detail/produits-detail.component';
import { ProductModifyComponent } from './moduleAdmin/pages/produitSection/product-modify/product-modify.component';
import { ProduitAjoutComponent } from './moduleAdmin/pages/produitSection/produit-ajout/produit-ajout.component';
import { ProductDeleteComponent } from './moduleAdmin/pages/produitSection/product-delete/product-delete.component';
import { CategoriesDetailComponent } from './moduleAdmin/pages/CategorySection/categories-detail/categories-detail.component';
import { CategoriesModifyComponent } from './moduleAdmin/pages/CategorySection/categories-modify/categories-modify.component';
import { CategoriesDeleteComponent } from './moduleAdmin/pages/CategorySection/categories-delete/categories-delete.component';
import { CategoriesAjoutComponent } from './moduleAdmin/pages/CategorySection/categories-ajout/categories-ajout.component';
import { UserDetailComponent } from './moduleAdmin/pages/UserSection/user-detail/user-detail.component';
import { UserModifyComponent } from './moduleAdmin/pages/UserSection/user-modify/user-modify.component';
import { UserDeleteComponent } from './moduleAdmin/pages/UserSection/user-delete/user-delete.component';
import { UserAjoutComponent } from './moduleAdmin/pages/UserSection/user-ajout/user-ajout.component';
import { StoreDetailComponent } from './moduleAdmin/pages/StoreSection/store-detail/store-detail.component';
import { StoreModifyComponent } from './moduleAdmin/pages/StoreSection/store-modify/store-modify.component';
import { StoreDeleteComponent } from './moduleAdmin/pages/StoreSection/store-delete/store-delete.component';
import { StoreAjoutComponent } from './moduleAdmin/pages/StoreSection/store-ajout/store-ajout.component';
import { ParameterComponent } from './moduleAdmin/pages/parameter/parameter.component';
import { FindStoreComponent } from './pages/findStore-lion/find-store/find-store.component';
import { OrderDetailComponent } from './moduleAdmin/pages/OrderSection/order-detail/order-detail.component';
import { OrderModifyComponent } from './moduleAdmin/pages/OrderSection/order-modify/order-modify.component';
import { OrderDeleteComponent } from './moduleAdmin/pages/OrderSection/order-delete/order-delete.component';
import { OrderAjoutComponent } from './moduleAdmin/pages/OrderSection/order-ajout/order-ajout.component';
import { PanierComponent } from './pages/panier/panier.component';
import { ConfirmationComponent } from './pages/payment-matt/confirmation/payment-confirmation-matt/confirmation.component';
import { PaymentFormComponent } from './pages/payment-matt/info-card-payment/payment-form-matt/payment-form.component';
import { LoginLionComponent } from './pages/login-lion/login-lion.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { AccountDetailsComponent } from './pages/account-details/account-details.component';
import { PersonalInfoComponent } from './pages/account-details/personal-info/personal-info.component';
import { OrdersComponent } from './pages/account-details/orders/orders.component';
import { TrackingOrderComponent } from './pages/tracking-order-matt/tracking-order.component';



export const routes: Routes = [
  //path main site
  {
    path: '', component: MainSiteComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: AcceuilLionComponent, title: "JX-HIFi" },
      { path: 'support', component: SupportLionComponent },
      { path: 'products/:categoryId', component: CatProductDisplayComponent },
      { path: 'search/:categoryId', component: CatProductDisplayComponent },
      { path: 'detail_product/:productId', component: DetailProductParentJeanComponent },
      { path: 'stores', component: FindStoreComponent },

      //path shopping cart --> checkout
      { path: 'cart', component: PanierComponent },
      { path: 'payment-form', component: PaymentFormComponent },
      { path: 'confirmation', component: ConfirmationComponent },
      { path: 'tracking-order', component: TrackingOrderComponent },

      //path login et gestion d'utilisateur
      { path: 'login', component: LoginLionComponent },
      { path: 'create-account', component: CreateAccountComponent },
      { path: 'account-details', component: AccountDetailsComponent,
        children:[
        { path: '', redirectTo: 'personalInfo', pathMatch: 'full' }, //re-diriger aux info personnel lors du onloaded de la page
        {path: 'personalInfo', component: PersonalInfoComponent},
        {path: 'orders', component: OrdersComponent},
        ],
       },


      // Gestion d'url inconnu
      // { path: '**', component: PageNotFoundComponent, title: "Error 404" }
    ],
  },


  //path admin dashboard
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'products', pathMatch: 'full' },
      { path: 'indexAdmin', component: AdminDashboardComponent },

      { path: 'users', component: UsersDashboardComponent },
      { path: 'users/details/:id', component: UserDetailComponent },
      { path: 'users/modify/:id', component: UserModifyComponent },
      { path: 'users/delete/:id', component: UserDeleteComponent },
      { path: 'users/ajout', component: UserAjoutComponent },

      { path: 'admins/details/:id', component: UserDetailComponent },
      { path: 'admins/modify/:id', component: UserModifyComponent },
      { path: 'admins/delete/:id', component: UserDeleteComponent },

      { path: 'products', component: ProductsDashboardComponent },
      { path: 'products/details/:id', component: ProduitsDetailComponent },
      { path: 'products/modify/:id', component: ProductModifyComponent },
      { path: 'products/delete/:id', component: ProductDeleteComponent },
      { path: 'products/ajout', component: ProduitAjoutComponent },

      { path: 'categories', component: CategoriesDashboardComponent },
      { path: 'categories/details/:id', component: CategoriesDetailComponent },
      { path: 'categories/modify/:id', component: CategoriesModifyComponent },
      { path: 'categories/delete/:id', component: CategoriesDeleteComponent },
      { path: 'categories/ajout', component: CategoriesAjoutComponent },


      { path: 'orders', component: OrdersDashboardComponent },
      { path: 'orders/details/:id', component: OrderDetailComponent },
      { path: 'orders/modify/:id', component: OrderModifyComponent },
      { path: 'orders/delete/:id', component: OrderDeleteComponent },
      { path: 'orders/ajout', component: OrderAjoutComponent },

      { path: 'stores', component: StoreDashboardComponent },
      { path: 'stores/details/:id', component: StoreDetailComponent },
      { path: 'stores/modify/:id', component: StoreModifyComponent },
      { path: 'stores/delete/:id', component: StoreDeleteComponent },
      { path: 'stores/ajout', component: StoreAjoutComponent },
      { path: 'parameter', component: ParameterComponent }
    ]
  }
];
