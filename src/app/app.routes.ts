import { Routes } from '@angular/router';

import {AdminDashboardComponent} from './moduleAdmin/pages/admin-dashboard/admin-dashboard.component';
import {MainSiteComponent} from './pages/main-site/main-site.component';
import {CategoriesDashboardComponent} from './moduleAdmin/pages/categories-dashboard/categories-dashboard.component';
import {UsersDashboardComponent} from './moduleAdmin/pages/users-dashboard/users-dashboard.component';
import {ProductsDashboardComponent} from './moduleAdmin/pages/products-dashboard/products-dashboard.component';
import {OrdersDashboardComponent} from './moduleAdmin/pages/orders-dashboard/orders-dashboard.component';
import {StoreDashboardComponent} from './moduleAdmin/pages/store-dashboard/store-dashboard.component';

export const routes: Routes = [
  {path:'',component:MainSiteComponent

  },

  //path admin dashboard
  {
    path:'admin',
    children: [
      {path: '', redirectTo: 'indexAdmin', pathMatch: 'full' },
      {path:'indexAdmin',component:AdminDashboardComponent},
      {path:'users',component:UsersDashboardComponent},
      {path:'products',component:ProductsDashboardComponent},
      {path:'categories',component:CategoriesDashboardComponent},
      {path:'orders',component:OrdersDashboardComponent},
      {path:'stores',component:StoreDashboardComponent}
    ]
  }
];
