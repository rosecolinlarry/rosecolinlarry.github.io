import { Component } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DashboardCardComponent } from '@rosecolinlarry/shared-ui';
import { ProductCardComponent, ProductCardInfo } from '@rosecolinlarry/products';

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
    CommonModule
  ]
})
export class ProductDashboardComponent {
  fakeProductList: ProductCardInfo[] = [];
  // TODO KA Get this from a service
  constructor() {

    this.fakeProductList = [{
      title: 'A Dropshipped Product',
      totalReviews: 1697,
      averageStars: 4.83,
      sellerName: "A Real Shop",
      sellingPrice: 29.99,
      listPrice: 69.99,
      verified: true,
      isFavorite: false,
      imageSrc: "https://i.imgur.com/is4kHp1.jpeg",
      onSale: true,
      freeShipping: true
    }, {
      title: 'Doggo',
      totalReviews: 24,
      averageStars: 4.9,
      sellerName: "A Totally Legit Shop",
      listPrice: 18.95,
      verified: true,
      isFavorite: false,
      imageSrc: "https://i.imgur.com/yx6IE0s.jpeg",
      freeShipping: true
    }, {
      title: 'The Dream',
      totalReviews: 2,
      averageStars: 3.6,
      sellerName: "A Scammer",
      sellingPrice: 569.99,
      listPrice: 1489.95,
      imageSrc: "https://i.imgur.com/hV4pCqa.jpeg",
      onSale: true,
      freeShipping: true
    }]
  }
}
