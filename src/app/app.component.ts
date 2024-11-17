import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { AcceuilLionComponent } from "./pages/acceuil-lion/acceuil-lion.component";
import { User } from './models/User';
import { listUsers } from '../mockData/mock-users';
import { Category } from './models/Category';
import { listCategories } from '../mockData/mock-categories';
import { Product } from './models/Product';
import { listProducts } from '../mockData/mock-products';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule,
    AcceuilLionComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
  
export class AppComponent {
  // Test de creation d'objet -----------
  // testUsers: User[] = listUsers;
  // testCat: Category[] = listCategories;
  // testProducts: Product[] = listProducts;

  // ngOnInit() {
  //   console.table(this.testUsers);
  //   console.table(this.testCat);
  //   console.table(this.testProducts);
  // }
  // Test de creation d'objet -----------
}
