import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent {
  @Input() products: Product[] = [];

  private likedIds = new Set<number>(); 

  
  isLiked(id: number): boolean {
    return this.likedIds.has(id);
  }

  
  onToggleLike(id: number) {
    const item = this.products.find(p => p.id === id);
    if (!item) return;

    if (this.likedIds.has(id)) {
      this.likedIds.delete(id);              
      item.likes = Math.max(0, item.likes - 1); 
    } else {
      this.likedIds.add(id);                 
      item.likes += 1;                       
    }
  }

  onDelete(id: number) {
    this.products = this.products.filter(p => p.id !== id);
    this.likedIds.delete(id); 
  }
}