import { Routes } from '@angular/router';

import { AdminDashboardComponent } from './moduleAdmin/pages/admin-dashboard/admin-dashboard.component';
import { MainSiteComponent } from './pages/main-site/main-site.component';
import { CategoriesDashboardComponent } from './moduleAdmin/pages/categories-dashboard/categories-dashboard.component';
import { UsersDashboardComponent } from './moduleAdmin/pages/users-dashboard/users-dashboard.component';
import { ProductsDashboardComponent } from './moduleAdmin/pages/products-dashboard/products-dashboard.component';
import { OrdersDashboardComponent } from './moduleAdmin/pages/orders-dashboard/orders-dashboard.component';
import { StoreDashboardComponent } from './moduleAdmin/pages/store-dashboard/store-dashboard.component';
import { SupportLionComponent } from './pages/support-lion/support-lion.component';
import { AdminLayoutComponent } from './moduleAdmin/pages/layout/admin-layout/admin-layout.component';
import { AcceuilLionComponent } from './pages/acceuil-lion/acceuil-lion.component';
import { CatProductDisplayComponent } from './pages/detail-category-jean/cat-product-display/cat-product-display.component';

export const routes: Routes = [
  {
    path: '', component: MainSiteComponent,
    children: [
      { path: 'home', component: AcceuilLionComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'support', component: SupportLionComponent },
      { path: 'products', component: CatProductDisplayComponent },
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
      { path: 'products', component: ProductsDashboardComponent },
      { path: 'categories', component: CategoriesDashboardComponent },
      { path: 'orders', component: OrdersDashboardComponent },
      { path: 'stores', component: StoreDashboardComponent }
    ]
  }
];
