import { Component } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DashboardCardComponent } from '@rosecolinlarry/shared-ui';
import {
  ProductCardComponent,
  ProductCardInfo,
} from '@rosecolinlarry/products';

@Component({
  selector: 'lib-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrl: './product-dashboard.component.scss',
  standalone: true,
  imports: [
    AsyncPipe,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    DashboardCardComponent,
    ProductCardComponent,
    CommonModule,
  ],
})
export class ProductDashboardComponent {
  fakeProductList: ProductCardInfo[] = [];
  // TODO KA Get this from a service
  constructor() {
    this.fakeProductList = [
      {
        title: 'A Dropshipped Product',
        totalReviews: 1697,
        averageStars: 4.83,
        sellerName: 'A Real Shop',
        sellingPrice: 69.99,
        listPrice: 29.99,
        verified: true,
        isFavorite: true,
        imageSrc: 'https://i.imgur.com/is4kHp1.jpeg',
        onSale: true,
        freeShipping: true,
      },
      {
        title:
          'What do you mean my only purpose here is to test word wrapping? I have hopes and dreams too!',
        imageSrc: 'https://i.imgur.com/zaMQJrz.jpeg',
        averageStars: 4.56,
        totalReviews: 553252356,
        sellerName:
          'If I am being completely honest, I do not have any actual hopes and dreams. I am just a fraud and I always have known this to be true. ',
        listPrice: 8.75,
        onSale: true,
        sellingPrice: 92.25,
        freeShipping: true,
        isTopPick: true,
        isFavorite: true,
        verified: true,
      },
      {
        title: 'Doggo',
        totalReviews: 24,
        averageStars: 4.9,
        sellerName: 'A Totally Legit Shop',
        listPrice: 18.95,
        verified: true,
        isFavorite: false,
        imageSrc: 'https://i.imgur.com/yx6IE0s.jpeg',
        freeShipping: true,
      },
      {
        title: 'The Dream',
        totalReviews: 1,
        averageStars: 5.0,
        sellerName: 'A Scammer',
        sellingPrice: 1569.99,
        listPrice: 0.99,
        imageSrc: 'https://i.imgur.com/hV4pCqa.jpeg',
        onSale: true,
        freeShipping: true,
      },
      {
        title: 'A Custom Poem - Guaranteed to Bring Good Fortune',
        imageSrc: 'https://i.imgur.com/9MZx2FQ.jpeg',
        averageStars: 4.56,
        totalReviews: 156,
        sellerName: 'The Fortune Teller',
        listPrice: 99.99,
        freeShipping: true,
        isTopPick: true,
        isFavorite: true,
        verified: true,
      },
      {
        title: 'Totally Not a Placeholder',
        imageSrc: 'https://i.imgur.com/IDyEDCU.jpeg',
        averageStars: 2.56,
        totalReviews: 56,
        sellerName: 'I Will Seal You ',
        listPrice: 1.99,
        onSale: true,
        sellingPrice: 19.99,
        freeShipping: true,
        isTopPick: true,
        isFavorite: true,
        verified: true,
      },
    ];
  }
}
