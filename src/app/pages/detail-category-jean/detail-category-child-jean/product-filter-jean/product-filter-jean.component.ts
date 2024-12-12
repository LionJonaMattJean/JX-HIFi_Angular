import { Component, Input, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FilterService } from '../../../../services/filter.service';

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
  filterService: FilterService = inject(FilterService);

  @Input() brands: string[] = [];
  @Input() colors: string[] = [];
  @Input() minPrice: number = 0;
  @Input() maxPrice: number = 0;

  selectedBrands: Set<string> = new Set();
  selectedColors: Set<string> = new Set();
  selectedMinPrice: number = 0;
  selectedMaxPrice: number = 0;

  ngOnInit() {
    // Initialiser les filtres sélectionnés avec l'état actuel
    const filters = this.filterService.getFilters();
    this.selectedBrands = new Set(filters.brands);
    this.selectedColors = new Set(filters.colors);
    this.selectedMinPrice = filters.minPrice ?? this.minPrice;
    this.selectedMaxPrice = filters.maxPrice ?? this.maxPrice;

    // Écouter les mises à jour des filtres dans le service
    this.filterService.filters$.subscribe(filters => {
      this.selectedBrands = new Set(filters.brands);
      this.selectedColors = new Set(filters.colors);
      this.selectedMinPrice = filters.minPrice ?? this.minPrice;
      this.selectedMaxPrice = filters.maxPrice ?? this.maxPrice;
    });
  }

  onBrandChecked(event: Event, brand: string) {
    //converti l'event trigger en HTMLInput pour recuperer la valeur du checked
    const isChecked = (event.currentTarget as HTMLInputElement).checked;
    isChecked ? this.selectedBrands.add(brand) : this.selectedBrands.delete(brand);

    this.updateFilters();
  }

  onColorChecked(event: Event, color: string) {
    const isChecked = (event.currentTarget as HTMLInputElement).checked;
    isChecked ? this.selectedColors.add(color) : this.selectedColors.delete(color);

    this.updateFilters();
  }

  onMaxPriceChange(): void {
    if (this.selectedMaxPrice !== null && this.selectedMaxPrice > this.maxPrice) {
      this.selectedMaxPrice = this.maxPrice;
    }
    this.updateFilters();
  }

  updateFilters(): void {
    this.filterService.updateFilters({
      brands: Array.from(this.selectedBrands),
      colors: Array.from(this.selectedColors),
      minPrice: this.selectedMinPrice,
      maxPrice: this.selectedMaxPrice
    });
  }
}