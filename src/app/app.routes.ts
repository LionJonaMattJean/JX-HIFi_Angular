import { Routes } from '@angular/router';

import {AdminDashboardComponent} from './moduleAdmin/pages/admin-dashboard/admin-dashboard.component';
import {MainSiteComponent} from './pages/main-site/main-site.component';

export const routes: Routes = [
  {path:'',component:MainSiteComponent

  },

  //path admin dashboard
  {
    path:'admin',
    children: [
      { path: '', redirectTo: 'indexAdmin', pathMatch: 'full' },
      {path:'indexAdmin',component:AdminDashboardComponent}
    ]
  }
];
