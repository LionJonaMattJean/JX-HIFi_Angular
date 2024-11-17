import { Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {AdminDashboardComponent} from './moduleAdmin/pages/admin-dashboard/admin-dashboard.component';

export const routes: Routes = [
  {path:'',component:AppComponent

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
