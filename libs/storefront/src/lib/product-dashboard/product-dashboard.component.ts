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
        title: 'A Very Much Legally Distinct Product',
        imageSrc: 'https://i.imgur.com/63QIphj.jpeg',
        averageStars: 4.72,
        totalReviews: 193,
        sellerName: 'Apex Stores',
        listPrice: 27.99,
        onSale: true,
        sellingPrice: 29.99,
        freeShipping: true,
        isTopPick: false,
        isFavorite: false,
        verified: false,
      },
      {
        title:
          'What do you mean my only purpose here is to test word wrapping? I have hopes and dreams too!',
        imageSrc: 'https://i.imgur.com/zkcXBmz.jpeg',
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
        title: 'Totally Not a Cat',
        totalReviews: 24,
        averageStars: 4.9,
        sellerName: 'A Totally Legit Shop',
        listPrice: 18.95,
        verified: true,
        isFavorite: false,
        imageSrc: 'https://i.imgur.com/zUXEP2F.jpeg',
        freeShipping: true,
      },
      {
        title: 'The Dream',
        totalReviews: 1,
        averageStars: 5.0,
        sellerName: 'A Scammer',
        sellingPrice: 1569.99,
        listPrice: 0.99,
        imageSrc: 'https://i.imgur.com/IspyTDF.jpeg',
        onSale: true,
        freeShipping: true,
      },
      {
        title: 'This Is Handcrafted and Unique',
        imageSrc: 'https://i.imgur.com/63QIphj.jpeg',
        averageStars: 4.96,
        totalReviews: 224,
        sellerName: 'Does Not Mass Produce Goods',
        listPrice: 26.99,
        onSale: true,
        sellingPrice: 29.99,
        freeShipping: true,
        isTopPick: false,
        isFavorite: false,
        verified: false,
      },
      {
        title: 'A Custom Poem - Guaranteed to Bring Good Fortune',
        imageSrc: 'https://i.imgur.com/NcM7KFr.jpeg',
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
        imageSrc: 'https://i.imgur.com/neV4tFZ.jpeg',
        averageStars: 2.56,
        totalReviews: 56,
        sellerName: 'I Will Seal You',
        listPrice: 1.99,
        onSale: true,
        sellingPrice: 19.99,
        freeShipping: true,
        isTopPick: true,
        isFavorite: true,
        verified: true,
      },
      {
        title: 'Cat',
        imageSrc: 'https://i.imgur.com/63QIphj.jpeg',
        averageStars: 5.0,
        totalReviews: 2,
        sellerName: 'Why Do People Keep Stealing My Products?',
        listPrice: 29.99,
        onSale: false,
        sellingPrice: 29.99,
        freeShipping: false,
        isTopPick: false,
        isFavorite: false,
        verified: true,
      },
      {
        title: 'Bartender',
        imageSrc: 'https://i.imgur.com/3ueSNCd.jpeg',
        averageStars: 4.99,
        totalReviews: 810,
        sellerName: 'The Apex Store',
        listPrice: 109.99,
        onSale: true,
        sellingPrice: 250.0,
        freeShipping: true,
        isTopPick: true,
        isFavorite: true,
        verified: true,
      },
      {
        title: 'just here to show off my cat',
        imageSrc: 'https://i.imgur.com/g9tM58b.jpeg',
        averageStars: 0,
        totalReviews: 0,
        sellerName: 'Alt + F4',
        listPrice: 0.0,
        onSale: false,
        sellingPrice: 0.0,
        freeShipping: true,
        isTopPick: true,
        isFavorite: true,
        verified: true,
      },
      {
        title: "isn't he so cute?",
        imageSrc: 'https://i.imgur.com/igAe7Ml.jpeg',
        averageStars: 0,
        totalReviews: 0,
        sellerName: 'Alt + F4',
        listPrice: 0.0,
        onSale: false,
        sellingPrice: 0.0,
        freeShipping: true,
        isTopPick: true,
        isFavorite: false,
        verified: true,
      },
      {
        title: 'Like, look at his little fluffy belly!',
        imageSrc: 'https://i.imgur.com/SRIEegD.jpeg',
        averageStars: 0,
        totalReviews: 0,
        sellerName: 'Alt + F4',
        listPrice: 0.0,
        onSale: false,
        sellingPrice: 0.0,
        freeShipping: true,
        isTopPick: true,
        isFavorite: false,
        verified: true,
      },
      {
        title: "You won't want to catch these hands (paws?)",
        imageSrc: 'https://i.imgur.com/boJhcPW.jpeg',
        averageStars: 0,
        totalReviews: 0,
        sellerName: 'Alt + F4',
        listPrice: 0.0,
        onSale: false,
        sellingPrice: 0.0,
        freeShipping: true,
        isTopPick: true,
        isFavorite: false,
        verified: true,
      },
      {
        title: 'A Smeared Painting',
        imageSrc: 'https://i.imgur.com/7SxD2LU.jpeg',
        averageStars: 2.53,
        totalReviews: 3,
        sellerName: 'The Apex Store',
        listPrice: 1.86,
        onSale: true,
        sellingPrice: 2.99,
        freeShipping: false,
        isTopPick: false,
        isFavorite: false,
        verified: true,
      },
    ];
  }
}
