import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgClass, NgForOf, NgIf } from "@angular/common";
import { RouterLink } from "@angular/router";
import { OrderItem } from '../../../../models/OrderItem';
import { ProductsService } from '../../../../services/products.service';
import { Product } from '../../../../models/Product';
import { CustomerService } from '../../../../services/customer.service';
import { OrderService } from '../../../../services/order.service';
import { Order } from '../../../../models/Order';


@Component({
  selector: 'app-order-ajout',
  standalone: true,
  imports: [
    FormsModule,
    NgClass,
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './order-ajout.component.html',
  styleUrl: './order-ajout.component.css'
})
export class OrderAjoutComponent {
  orderService = inject(OrderService);
  order!: any;
  user!: any;
  usePersonalAddress: boolean = false;
  formatedDate!: string;
  productList!: Product[];
  filteredProducts: Product[] = [];
  activeIndex: number | null = null;
  userFound: boolean = false;
  findUserClicked: boolean = false;
  alertMessage: string | null = null;
  alertType: string = 'alert-success';

  constructor(private productService: ProductsService, private customerService: CustomerService) {
    this.order = {
      id: "",
      card: {
        cardNumber: 0,
        expiryDate: [0, 0, 0], // Année, mois, jour
        cvc: 0,
        paymentMethod: ""
      },
      orderItems: [
        {
          product: {
            id: "",
            brand: "",
            name: "",
            sellPrice: 0,
            specialPrice: 0,
            onSale: false,
            stock: 0
          },
          quantity: 0,
          sousTotal: 0
        }
      ],
      stateTax: 10,
      totalAmount: 0,
      status: "Received",
      orderDate: [0, 0, 0], // Année, mois, jour
      shippingAddress: {
        address: "",
        city: "",
        province: "",
        postalCode: "",
        country: ""
      },
      customer: {
        id: "",
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        phone: "",
        role: "",
        address: {
          address: "",
          city: "",
          province: "",
          postalCode: "",
          country: ""
        },
        isDeleted: false
      },
      tps: 5
    };

    this.productService.getAllProduct().subscribe(productList => {
      this.productList = productList;
    })
  }

  fillShippingAddress() {
    if (this.usePersonalAddress) {
      this.order.shippingAddress.address = this.order.customer.address.address;
      this.order.shippingAddress.city = this.order.customer.address.city;
      this.order.shippingAddress.province = this.order.customer.address.province;
      this.order.shippingAddress.postalCode = this.order.customer.address.postalCode;
      this.order.shippingAddress.country = this.order.customer.address.country;
    } else {
      this.order.shippingAddress = {
        address: '',
        city: '',
        province: '',
        postalCode: '',
        country: ''
      };
    }
  }

  //************************************* Recherche et ajout de Customer **********************************************

  triggerFindUser(email: string) {
    this.userFound = false;
    this.findUserClicked = false;
    if (email) {
      this.customerService.getCustomerByMail(email).subscribe(user => {
        this.order.customer = user;
        this.userFound = true;
        this.findUserClicked = true;
      },
        (error) => {
          this.userFound = false;
          this.findUserClicked = true;
          console.error('User not found', error);
        })
    } else {
      this.userFound = false;
    }
  }

  //************************************* Recherche et ajout de produit **********************************************
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

  //**************************************** Creation du Order *************************************************

  createOrder() {
    this.orderService.createNewOrder(this.order).subscribe({
      next: (data: Order) => {
        this.alertMessage = "La commande a été créer avec succès";

      },
      error: (error: any) => {
        console.error('Error modify product:', error);
        this.alertMessage = "Erreur lors de la création";
        this.alertType = "alert-danger";
      }
    });
  }

  //************************************* Convertion de la Date **********************************************

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



  closeAlert(): void {
    this.alertMessage = null;
  }
}
