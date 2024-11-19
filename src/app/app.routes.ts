import { Routes } from '@angular/router';

import {AdminDashboardComponent} from './moduleAdmin/pages/admin-dashboard/admin-dashboard.component';
import {MainSiteComponent} from './pages/main-site/main-site.component';
import { SupportLionComponent } from './pages/support-lion/support-lion.component';

export const routes: Routes = [
  {path:'',component:MainSiteComponent


  },
  {path: 'support', component:SupportLionComponent},

  //path admin dashboard
  {
    path:'admin',
    children: [
      { path: '', redirectTo: 'indexAdmin', pathMatch: 'full' },
      {path:'indexAdmin',component:AdminDashboardComponent}
    ]
  }
];
