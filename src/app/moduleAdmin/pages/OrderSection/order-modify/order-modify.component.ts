import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { OrderService } from '../../../../services/order.service';
import { OrderItem } from '../../../../models/OrderItem';
import { Product } from '../../../../models/Product';
import { ProductsService } from '../../../../services/products.service';
import { Order } from '../../../../models/Order';

@Component({
  selector: 'app-order-modify',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    NgIf,
    NgForOf,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './order-modify.component.html',
  styleUrl: './order-modify.component.css'
})
export class OrderModifyComponent implements OnInit {
  order!: any;
  formatedDate!: string;
  id!: string;
  orderModified: boolean = false;
  productList!: Product[];
  filteredProducts: Product[] = [];
  activeIndex: number | null = null;
  alertMessage: string | null = null;
  alertType: string = 'alert-success';
  constructor(private orderService: OrderService, private route: ActivatedRoute, private productService: ProductsService) { }

  ngOnInit() {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.orderService.getOrderById(this.id).subscribe(order => {
      this.order = order;
      if (this.order && this.order.card) {
        this.formatedDate = this.backToFront(this.order.card.expiryDate);
      }
    });
    this.productService.getAllProduct().subscribe(productList => {
      this.productList = productList;
    })
  }

  /**
   * Transforme [yyyy, mm, jj] en "yyyy-MM" pour l'input
   * @param date
   * @returns "yyyy-MM": string
   */
  backToFront(date: number[]): string {
    if (!date || date.length < 2) return '';
    const [year, month] = date;
    return `${year}-${month.toString().padStart(2, '0')}`;
  }

  /**
   * Transforme la valeur de l'input "yyyy-MM-dd" en [année, mois, jour] pour le json
   * @param dateString
   * @returns [yyyy, mm, jj]
   */
  frontToBack(dateString: string): number[] {
    if (!dateString) return [];
    const [year, month] = dateString.split('-').map(Number);
    return [year, month, 1];
  }
  /**
   * est trigger quand l'utilisateur change la date
   * @param newDate
   */
  onExpiryDateChange(newDate: string): void {
    this.order.card.expiryDate = this.frontToBack(newDate);
  }

  filterProducts(query: string, index: number) {
    this.activeIndex = index;
    this.filteredProducts = this.productList.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) || product.id.toString().includes(query)
    );
  }

  selectProduct(orderItem: OrderItem, selectedProduct: Product) {
    orderItem.product = { ...selectedProduct };
    orderItem.quantity = 1;// Copy product details
    if (orderItem.product.onSale) {
      orderItem.subTotal = selectedProduct.specialPrice * orderItem.quantity;
    }
    else {
      orderItem.subTotal = selectedProduct.sellPrice * orderItem.quantity;
    }
    console.log(
      'orderItem.product.sellPrice',
      orderItem.subTotal
    )
    this.filteredProducts = []; // Clear the dropdown
  }
  
  removeProduct(i: number) {
    this.order.orderItems.splice(i, 1);
  }

  addProduct() {
    const newOrderItem: OrderItem = {
      id: '',
      product: {
        id: '',
        name: '',
        description: '',
        sellPrice: 0,
        costPrice: 0,
        specialPrice: 0,
        stock: 0,
        onSale: false,
        category: { id: '', name: '', description: '' },
        shortSpecifications: [],
        specificationDetails: [],
        images: [],
        colors: [],
        reviews: [],
        brand: ''
      },
      quantity: 1,
      subTotal: 0
    };
    this.order.orderItems.push(newOrderItem);

  }

  modifyOrder() {
    this.orderService.updateOrder(this.order, this.order.id).subscribe({
      next: (data: Order) => {
        this.alertMessage = "La commande a été modifier avec succès";

      },
      error: (error: any) => {
        console.error('Error modify product:', error);
        this.alertMessage = "Erreur lors de la modification";
        this.alertType = "alert-danger";
      }
    });

  }
  closeAlert(): void {
    this.alertMessage = null;
  }
}
