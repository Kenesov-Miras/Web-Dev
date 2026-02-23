import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './services/product.service';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { ProductListComponent } from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  categories: Category[] = [];
  selectedCategoryId: number | null = null;
  selectedProducts: Product[] = [];

  constructor(private ps: ProductService) {
    this.categories = this.ps.getCategories();
  }

  selectCategory(id: number) {
    this.selectedCategoryId = id;
    // көшірме (delete UI-ға ғана әсер етсін)
    this.selectedProducts = this.ps.getProductsByCategory(id).map(p => ({ ...p }));
  }

  reset() {
    this.selectedCategoryId = null;
    this.selectedProducts = [];
  }
}