import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import {ProductsService} from '../../../services/products.service';
import { Router } from '@angular/router';
import {Product} from '../../../models/Product';


@Component({
  selector: 'app-header-dashboard',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './header-dashboard.component.html',

  styleUrl: '../../style-admin.css'
})
export class HeaderDashboardComponent {
  activeIndex: number = 0;
  searchQuery: string = ''; // Bound to the search input field
  productList:Product[]=[];
  idProduct?:number;

  filteredProducts = [...this.productList];
constructor(private productService:ProductsService, private router: Router) {

    this.productService.getProductsForAutoComplete().subscribe(data => {
      this.productList = data;
    })
  }
  filterProducts(query: string, index: number): void {
    this.activeIndex = index; // Activate the corresponding dropdown
    this.filteredProducts = this.productList.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) || product.id.toLowerCase().includes(query),

    );
  }
onSearch(): void {
    if (this.idProduct) {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;

      this.router.navigate(['/admin/products/details/', this.idProduct])
        .then(r => {

        })
        .catch(err => {
          console.error('Navigation failed', err);
        });
    } else {
      console.warn('No product ID selected for navigation.');
    }

}


  selectProduct(product: any): void {

    this.idProduct = product.id;
    this.searchQuery = product.name;
    this.filteredProducts = [];
  }
}
