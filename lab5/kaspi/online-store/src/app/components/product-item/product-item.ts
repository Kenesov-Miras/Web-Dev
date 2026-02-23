import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css'
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  @Output() deleteProduct = new EventEmitter<number>();

  currentImage = '';

  ngOnInit(): void {
    this.currentImage = (this.product.images?.[0] || this.product.image);
  }

  changeImage(img: string) {
    this.currentImage = img;
  }

  like() {
    this.product.likes += 1;
  }

  remove() {
    this.deleteProduct.emit(this.product.id);
  }

  shareWhatsApp() {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(`Check out: ${this.product.name}`);
    window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
  }

  shareTelegram() {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(this.product.name);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }
}