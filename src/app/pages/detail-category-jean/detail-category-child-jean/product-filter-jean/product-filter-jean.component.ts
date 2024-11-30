import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../../models/Product';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-filter-jean',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './product-filter-jean.component.html',
  styleUrl: './product-filter-jean.component.css'
})
export class ProductFilterJeanComponent implements OnInit {
  @Input() products: Product[] = [];
  @Output() filterChange = new EventEmitter<any>();

  prices: number[] = [];
  brands: string[] = [];
  colors: string[] = [];

  selectedBrands: Set<string> = new Set();
  selectedColors: Set<string> = new Set();

  minSlider: number = 0;
  maxSlider: number = 0;
  minTxtPrice: number = 0;
  maxTxtPrice: number = 0;

  ngOnInit() {
    this.setFilter();
  }

  private setFilter() {
    this.brands = Array.from(new Set(this.products.map(product => product.brand)));
    this.colors = Array.from(new Set(this.products.flatMap(product => product.colors || [])));

    this.setPriceFilter();
  }

  private setPriceFilter() {
    this.prices = this.products.map(product => product.sellPrice).sort((a, b) => a - b);
    this.minTxtPrice = this.prices[0];
    this.maxTxtPrice = this.prices[this.prices.length - 1];
    this.minSlider = this.minTxtPrice;
    this.maxSlider = this.maxTxtPrice;
  }

  //converti l'event trigger en HTMLInput pour recuperer la valeur du checked
  onBrandChange(event: Event, brand: string) {
    const isChecked = (event.currentTarget as HTMLInputElement).checked;

    this.onBrandChecked(brand, isChecked);

    console.log("onBrandChange triggered")
  }
  onBrandChecked(brand: string, checked: boolean) {
    checked ? this.selectedBrands.add(brand) : this.selectedBrands.delete(brand);
    console.log(this.selectedBrands)
  }

  //converti l'event trigger en HTMLInput pour recuperer la valeur du checked
  onColorChange(event: Event, color: string) {
    const isChecked = (event.currentTarget as HTMLInputElement).checked;

    this.onColorChecked(color, isChecked);

    console.log("onColorChange triggered")
  }
  onColorChecked(color: string, checked: boolean) {
    checked ? this.selectedColors.add(color) : this.selectedColors.delete(color);
    console.log(this.selectedColors)
  }

  onMaxPriceChange() {
    if (this.maxTxtPrice > this.maxSlider)
      this.maxTxtPrice = this.maxSlider;
  }

  applyNewFilter() {
    this.filterChange.emit({
      brands: Array.from(this.selectedBrands),
      colors: Array.from(this.selectedColors),
      maxPrice: this.maxTxtPrice
    })
    console.log("btn applyNewFilter triggered")
  }
}