import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {

  products: Product[] = [

  {
    id: 1,
    name: 'iPhone 15',
    description: 'Apple iPhone 15 128GB Pink.',
    price: 383966,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h81/h37/86303335186462.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hea/h39/83559339655198.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h22/hf6/83559333953566.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hf0/h8c/83559334019102.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-rozovyi-113137949/?c=750000000'
  },

  {
    id: 2,
    name: 'Samsung Galaxy S23',
    description: 'Samsung Galaxy S23 8GB 256GB Lilac.',
    price: 500000,
    rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hd4/69065015853086.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h53/h6b/69065016377374.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h4b/h24/69065018474526.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hc3/hed/69065019523102.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-5g-8-gb-256-gb-sirenevyi-108915896/?c=750000000'
  },

  {
    id: 3,
    name: 'iPhone 17',
    description: 'Apple iPhone 17 256GB Violet.',
    price: 547800,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pb8/p3b/64165135.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p48/p3b/64165139.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p9c/p3b/64165136.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p64/p3b/64165138.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-17-256gb-fioletovyi-145466665/?c=750000000'
  },

  {
    id: 4,
    name: 'iPhone 17 Pro Max',
    description: 'Apple iPhone 17 Pro Max 1024GB Orange.',
    price: 1099714,
    rating: 5.0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p24/p88/64170090.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p3b/p8d/64476124.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p41/p88/64170091.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p79/p88/64170093.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-max-1024gb-oranzhevyi-145468223/?c=750000000'
  },

  {
    id: 5,
    name: 'Xiaomi Redmi Note 14 Pro',
    description: 'Xiaomi Redmi Note 14 Pro 8GB 256GB Black.',
    price: 162990,
    rating: 4.3,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p64/p81/67214865.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p65/p99/45808873.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p81/p99/45808874.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pb9/p99/45808876.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-14-pro-8-gb-256-gb-chernyi-133335702/?c=750000000'
  },

  {
    id: 6,
    name: 'Poco X7 Pro',
    description: 'Poco X7 Pro 12GB 512GB Black.',
    price: 234890,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p05/p6a/67021874.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pe1/p22/19792402.jpeg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p88/p30/19792406.jpeg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p5c/p37/19792408.jpeg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/poco-x7-pro-12-gb-512-gb-chernyi-133345346/?c=750000000'
  },

  {
    id: 7,
    name: 'Samsung Galaxy S25 Ultra',
    description: 'Samsung Galaxy S25 Ultra 12GB 256GB Black.',
    price: 577522,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p84/p24/20120106.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pbc/p24/20120108.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pb5/p27/20120114.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/ped/p27/20120116.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-256-gb-chernyi-133435348/?c=750000000'
  },

  {
    id: 8,
    name: 'Samsung Galaxy Z Flip7 FE',
    description: 'Samsung Galaxy Z Flip7 FE 8GB 256GB Black.',
    price: 499413,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pcf/pe6/53123321.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pb3/pe6/53123322.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p5e/pe6/53123325.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p42/pe6/53123326.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-z-flip7-fe-5g-8-gb-256-gb-chernyi-142551218/?c=750000000'
  },

  {
    id: 9,
    name: 'Huawei nova Y63',
    description: 'Huawei nova Y63 4GB 128GB Black.',
    price: 66455,
    rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p98/p15/49461116.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p7c/p15/49461117.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p2e/p12/49461126.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p2b/p57/49461222.PNG?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/huawei-nova-y63-4-gb-128-gb-chernyi-140095457/?c=750000000'
  },

  {
    id: 10,
    name: 'iPhone 13',
    description: 'Apple iPhone 13 128GB White.',
    price: 329990,
    rating: 5.0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hc9/h90/64209083007006.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h3b/h93/64209085235230.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h8f/hce/64209121476638.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h4b/h84/64209123573790.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000'
  }

];


}