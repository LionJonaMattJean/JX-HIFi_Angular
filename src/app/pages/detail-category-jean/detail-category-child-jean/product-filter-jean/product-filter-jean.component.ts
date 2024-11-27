import { Component, Input, OnInit } from '@angular/core';
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
  prices: number[] = [];
  brands: string[] = [];

  minSlider: number = 0;
  maxSlider: number = 0;
  minTxtPrice: number = 0;
  maxTxtPrice: number = 0;
  minGap: number = 10;
  trackStyle: any = {};

  ngOnInit() {
    this.brands = this.products.map(product => product.brand);

    this.setPriceFilter();
  }

  private setPriceFilter() {
    this.prices = this.products.map(product => product.sellPrice).sort((a, b) => a - b);
    this.minTxtPrice = this.prices[0];
    this.maxTxtPrice = this.prices[this.prices.length - 1];
    this.minSlider = this.minTxtPrice;
    this.maxSlider = this.maxTxtPrice;

    this.updateTrackStyle();
  }

  onMinPriceChange() {
    if (this.minTxtPrice + this.minGap > this.maxTxtPrice) {
      this.minTxtPrice = this.maxTxtPrice - this.minGap;
    }

    if (this.minTxtPrice < this.minSlider) {
      this.minTxtPrice = this.minSlider;
    }
    this.updateTrackStyle();
  }

  onMaxPriceChange() {
    if (this.maxTxtPrice - this.minGap < this.minTxtPrice) {
      this.maxTxtPrice = this.minTxtPrice + this.minGap;
    }

    if (this.maxTxtPrice > this.maxSlider) {
      this.maxTxtPrice = this.maxSlider;
    }

    this.updateTrackStyle();
  }

  updateTrackStyle() {
    const leftPercent = ((this.minTxtPrice - this.minSlider) / (this.maxSlider - this.minSlider)) * 100;
    const rightPercent = 100 - ((this.maxTxtPrice - this.minSlider) / (this.maxSlider - this.minSlider)) * 100;
    this.trackStyle = {
      left: `${leftPercent}%`,
      right: `${rightPercent}%`
    };
  }
}