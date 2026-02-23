import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' },
  ];

  private readonly products: Product[] = [
    // ===== Smartphones (categoryId: 1) =====
    {
      id: 1, categoryId: 1, likes: 0,
      name: 'iPhone 15',
      description: 'A sleek everyday iPhone with great cameras, smooth performance, and long battery life.',
      price: 383966, rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h81/h37/86303335186462.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hea/h39/83559339655198.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h22/hf6/83559333953566.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf0/h8c/83559334019102.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-rozovyi-113137949/?c=750000000'
    },
    {
      id: 2, categoryId: 1, likes: 0,
      name: 'Samsung Galaxy S23',
      description: 'Compact flagship with a bright display, fast performance, and excellent photos day and night.',
      price: 500000, rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hd4/69065015853086.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h53/h6b/69065016377374.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h4b/h24/69065018474526.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc3/hed/69065019523102.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-5g-8-gb-256-gb-sirenevyi-108915896/?c=750000000'
    },
    {
      id: 3, categoryId: 1, likes: 0,
      name: 'Xiaomi Redmi Note 14 Pro',
      description: 'Great value phone with a large display, solid cameras, and strong battery for daily use.',
      price: 162990, rating: 4.3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p64/p81/67214865.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p65/p99/45808873.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p81/p99/45808874.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pb9/p99/45808876.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-14-pro-8-gb-256-gb-chernyi-133335702/?c=750000000'
    },
    {
      id: 4, categoryId: 1, likes: 0,
      name: 'Poco X7 Pro',
      description: 'Performance-focused phone with a powerful chipset, high refresh screen, and fast charging.',
      price: 234890, rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p05/p6a/67021874.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pe1/p22/19792402.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p88/p30/19792406.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p5c/p37/19792408.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/poco-x7-pro-12-gb-512-gb-chernyi-133345346/?c=750000000'
    },
    {
      id: 5, categoryId: 1, likes: 0,
      name: 'iPhone 13',
      description: 'Reliable iPhone with a smooth experience, strong cameras, and years of software updates.',
      price: 329990, rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h3b/h93/64209085235230.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h8f/hce/64209121476638.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h4b/h84/64209123573790.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000'
    },

    // ===== Laptops (categoryId: 2) =====
    {
      id: 6, categoryId: 2, likes: 0,
      name: 'Apple MacBook Air 13 2025 / 16 Гб / SSD 512 Гб / macOS / MW0X3',
      description: 'Lightweight laptop with excellent battery life, fast performance, and a great display for study and coding.',
      price: 651989, rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p15/p53/50302342.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p15/p53/50302342.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p6a/p53/50302345.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pa2/p53/50302347.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pbe/p53/50302348.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-512-gb-macos-mw0x3-141757964/?c=750000000'
    },
    {
      id: 7, categoryId: 2, likes: 0,
      name: 'ASUS VivoBook 15 X1504ZA-BQ1364W 15.6" / 16 Гб / SSD 512 Гб / Win 11 / 90NB1021-M02090',
      description: 'Affordable everyday laptop for studying, office tasks, and web browsing with a comfortable screen size.',
      price: 309227, rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h0a/h1f/84264932761630.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h0b/hd3/86542194966558.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf7/h2a/86542195097630.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hdf/hfe/86542195163166.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hfa/hb9/86542195228702.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/asus-vivobook-15-x1504za-bq1364w-15-6-16-gb-ssd-512-gb-win-11-90nb1021-m02090-121433042/?c=750000000'
    },
    {
      id: 8, categoryId: 2, likes: 0,
      name: 'ASUS TUF Gaming F16 16" / 16 Гб / SSD 512 Гб / Без ОС / FX607VU-RL060 / 90NR0N06-M002S0',
      description: 'Durable gaming laptop with strong performance for games, coding, and multitasking.',
      price: 550973, rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf7/h54/66630824525854.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p88/p17/33000228.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p6c/p17/33000229.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p00/p15/33000230.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc8/p14/33000232.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-f16-16-16-gb-ssd-512-gb-bez-os-fx607vu-rl060-90nr0n06-m002s0-137115867/?c=750000000'
    },
    {
      id: 9, categoryId: 2, likes: 0,
      name: 'Acer Aspire 16" / 16 Гб / eMMC 512 Гб / Win 11 Pro / NX.J5REM.01C / AL16-52P',
      description: 'Practical 16-inch laptop for everyday work with a big screen and smooth productivity performance.',
      price: 278484, rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5a/h6d/87277217370142.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p91/pf8/28407711.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p75/pf8/28407712.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p59/pf8/28407713.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p21/pf8/28407715.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/acer-aspire-16-16-gb-emmc-512-gb-win-11-pro-nx-j5rem-01c-al16-52p-135804242/?c=750000000'
    },
    {
      id: 10, categoryId: 2, likes: 0,
      name: 'HP Victus 15.6" / 16 Гб / SSD 512 Гб / DOS / 15-fb2027ci / A19GQEA',
      description: 'Versatile laptop for studying and light gaming with solid performance and a balanced design.',
      price: 539990, rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h74/h4c/84001805226014.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h25/hcc/85983814680606.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h5a/hed/85983814746142.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h94/h96/85983814811678.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hed/h80/85983814877214.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/hp-victus-15-6-16-gb-ssd-512-gb-dos-15-fb2027ci-a19gqea-119250104/?c=750000000'
    },

    // ===== Headphones (categoryId: 3) =====
    {
      id: 11, categoryId: 3, likes: 0,
      name: 'Sony WH-1000XM4 черный',
      description: 'Premium over-ear headphones with top-tier noise cancelling and rich, detailed sound.',
      price: 489999, rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h3a/h2b/64672520818718.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p64/pde/11569142.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p80/pde/11569143.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9c/pde/11569144.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pb8/pde/11569145.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm4-chernyi-100471997/?c=750000000'
    },
    {
      id: 12, categoryId: 3, likes: 0,
      name: 'Apple AirPods Max 2 черно-синий',
      description: 'High-end Apple headphones with excellent ANC, spatial audio, and seamless iPhone integration.',
      price: 277899, rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc6/hc6/65770351128510.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p68/p4c/3527586.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p83/p4b/3531601.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p4c/p4c/3527587.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p5b/p10/3532808.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-max-2-cherno-sinii-128622804/?c=750000000'
    },
    {
      id: 13, categoryId: 3, likes: 0,
      name: 'Apple AirPods Pro 3 белый',
      description: 'Comfortable true wireless earbuds with strong noise cancelling and great sound for everyday use.',
      price: 129734, rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h6c/h6b/64047847424030.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p89/pc5/64466278.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pa6/pc5/64466279.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p6d/pc5/64466277.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p12/pc8/64466280.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-3-belyi-145554533/?c=750000000'
    },
    {
      id: 14, categoryId: 3, likes: 0,
      name: 'Logitech G Pro X 2 Lightspeed черный',
      description: 'Wireless gaming headset with low latency, clear mic quality, and powerful sound for competitive play.',
      price: 101990, rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h6e/hc0/85158236360734.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha7/h5d/82389321252894.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd0/h6b/82389322301470.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h4f/h95/82389323218974.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hdd/ha4/82389324595230.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-logitech-g-pro-x-2-lightspeed-chernyi-112221535/?c=750000000'
    },
    {
      id: 15, categoryId: 3, likes: 0,
      name: 'Beats Studio Pro черный',
      description: 'Compact premium earbuds with excellent noise cancelling, clear audio, and a secure fit.',
      price: 118999, rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h24/h0a/80483971268638.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h9e/h68/83490668085278.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hba/hbe/83490668871710.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h2d/h79/83490669658142.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hed/h97/83490670182430.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-beats-studio-pro-chernyi-113105971/?c=750000000'
    },

    // ===== Tablets (categoryId: 4) =====
    {
      id: 16, categoryId: 4, likes: 0,
      name: 'Xiaomi Redmi Pad 2 4G 11 дюйм 8 Гб/256 Гб серый',
      description: 'Large-screen tablet for studying, note-taking, and entertainment with great value for the price.',
      price: 129990, rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5f/h6c/66284238721054.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p34/pcd/81439931.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pbd/p9b/46318883.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pa0/p9b/46318884.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p84/p9b/46318885.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-pad-2-4g-11-djuim-8-gb-256-gb-seryi-140640417/?c=750000000'
    },
    {
      id: 17, categoryId: 4, likes: 0,
      name: 'Apple iPad A16 11 2025 Wi-Fi 11 дюйм 6 Гб/128 Гб серебристый',
      description: 'Fast and reliable iPad for learning, creativity, and everyday apps with smooth performance.',
      price: 204133, rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/had/h0c/64368012775454.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p85/pe5/37011897.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p69/pe5/37011898.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-serebristyi-138199634/?c=750000000'
    },
    {
      id: 18, categoryId: 4, likes: 0,
      name: 'Huawei MatePad SE AGS6-W09 11 дюйм 4 Гб/128 Гб серый',
      description: 'Affordable tablet with a modern design and a comfortable display for reading and media.',
      price: 69890, rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p4e/p1c/37312894.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h2b/h62/86746767261726.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/haf/hbb/86952919859230.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h54/h62/86952919891998.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h9e/h3f/86952919924766.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/huawei-matepad-se-ags6-w09-11-djuim-4-gb-128-gb-seryi-122142602/?c=750000000'
    },
    {
      id: 19, categoryId: 4, likes: 0,
      name: 'Samsung Galaxy Tab A11 8.7 дюйм 8 Гб/128 Гб серебристый',
      description: 'Compact Android tablet for browsing, videos, and light study with a handy size.',
      price: 95849, rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h3a/hc2/84205255114782.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pc5/pad/69034470.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pe1/pad/69034471.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pfd/pad/69034472.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p19/pae/69034473.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-a11-8-7-djuim-8-gb-128-gb-serebristyi-146913719/?c=750000000'
    },
    {
      id: 20, categoryId: 4, likes: 0,
      name: 'Xiaomi Pad 6 8/256',
      description: 'Excellent price-to-performance tablet with a smooth display and strong power for multitasking.',
      price: 179997, rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h59/hf5/82130764038174.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h0b/hc4/84390016516126.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h80/hc4/84434711642142.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h7d/h6a/84434711904286.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hbe/hef/84434712035358.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-a9-5g-11-djuim-8-gb-128-gb-serebristyi-114175605/?c=750000000'
    },
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(p => p.categoryId === categoryId);
  }
}