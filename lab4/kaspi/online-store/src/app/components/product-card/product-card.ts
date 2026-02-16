import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard implements OnInit {

  @Input() product!: Product;

  currentImage!: string;

  ngOnInit() {
    this.currentImage = this.product.images[0];
  }

  changeImage(img: string) {
    this.currentImage = img;
  }

  shareWhatsApp() {
  const url = encodeURIComponent(this.product.link);
  window.open(`https://wa.me/?text=Check out this product: ${url}`, '_blank');
}

shareTelegram() {
  const url = encodeURIComponent(this.product.link);
  const text = encodeURIComponent(this.product.name);
  window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
}

}