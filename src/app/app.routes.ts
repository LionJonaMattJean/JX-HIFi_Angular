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
import {ProduitsDetailComponent} from './moduleAdmin/pages/produitSection/produits-detail/produits-detail.component';
import {ProductModifyComponent} from './moduleAdmin/pages/produitSection/product-modify/product-modify.component';
import {ProduitAjoutComponent} from './moduleAdmin/pages/produitSection/produit-ajout/produit-ajout.component';
import {ProductDeleteComponent} from './moduleAdmin/pages/produitSection/product-delete/product-delete.component';
import {
  CategoriesDetailComponent
} from './moduleAdmin/pages/CategorySection/categories-detail/categories-detail.component';
import {
  CategoriesModifyComponent
} from './moduleAdmin/pages/CategorySection/categories-modify/categories-modify.component';
import {
  CategoriesDeleteComponent
} from './moduleAdmin/pages/CategorySection/categories-delete/categories-delete.component';
import {
  CategoriesAjoutComponent
} from './moduleAdmin/pages/CategorySection/categories-ajout/categories-ajout.component';
import {UserDetailComponent} from './moduleAdmin/pages/UserSection/user-detail/user-detail.component';
import {UserModifyComponent} from './moduleAdmin/pages/UserSection/user-modify/user-modify.component';
import {UserDeleteComponent} from './moduleAdmin/pages/UserSection/user-delete/user-delete.component';
import {UserAjoutComponent} from './moduleAdmin/pages/UserSection/user-ajout/user-ajout.component';

export const routes: Routes = [
  {
    path: '', component: MainSiteComponent,
    children: [
      { path: 'home', component: AcceuilLionComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'support', component: SupportLionComponent },
      { path: 'products/:categoryId', component: CatProductDisplayComponent },
      { path: 'detail_product/:productId', component: DetailProductParentJeanComponent},
    ]
  },


  //path admin dashboard
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'indexAdmin', pathMatch: 'full' },
      { path: 'indexAdmin', component: AdminDashboardComponent },

      { path: 'users', component: UsersDashboardComponent },
      { path: 'users/details/:id', component: UserDetailComponent },
      { path: 'users/modify/:id', component: UserModifyComponent },
      { path: 'users/delete/:id', component: UserDeleteComponent },
      { path: 'users/ajout', component: UserAjoutComponent},

      { path: 'products', component: ProductsDashboardComponent },
      { path: 'products/details/:id', component: ProduitsDetailComponent },
      { path: 'products/modify/:id', component: ProductModifyComponent },
      { path: 'products/delete/:id', component: ProductDeleteComponent },
      { path: 'products/ajout', component: ProduitAjoutComponent },

      { path: 'categories', component: CategoriesDashboardComponent },
      { path: 'categories/details/:id', component: CategoriesDetailComponent },
      { path: 'categories/modify/:id', component: CategoriesModifyComponent},
      { path: 'categories/delete/:id', component: CategoriesDeleteComponent},
      { path: 'categories/ajout', component: CategoriesAjoutComponent},


      { path: 'orders', component: OrdersDashboardComponent },
      { path: 'stores', component: StoreDashboardComponent }
    ]
  }
];
