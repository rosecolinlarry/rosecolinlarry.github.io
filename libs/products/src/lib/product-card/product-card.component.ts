import { Component, Input } from '@angular/core';
import { CommonModule, CurrencyPipe, PercentPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CondensedStarRatingComponent } from './star-rating/condensed-star-rating/condensed-star-rating.component';

@Component({
  selector: 'lib-product-card',
  standalone: true,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    CondensedStarRatingComponent,
    CurrencyPipe,
    PercentPipe,
    MatMenuModule
  ]
})
export class ProductCardComponent {
  @Input()
  productInfo!: ProductCardInfo;
  percentOff: number | undefined;
  // TODO Show different number or add validation in service for saving product
  // info to have sellingPrice less than or equal to listingPrice?

  constructor() {
    if (this.productInfo?.onSale && this.productInfo?.sellingPrice) {
      this.percentOff = (this.productInfo.listPrice - this.productInfo.sellingPrice ?? 0) / this.productInfo.listPrice
    }
  }

}

export interface ProductCardInfo {
  title: string;
  totalReviews: number;
  averageStars: number;
  sellerName: string;
  sellingPrice?: number; // If on sale
  listPrice: number;
  verified?: boolean;
  isFavorite?: boolean;
  imageSrc: string;
  onSale?: boolean;
  freeShipping?: boolean;
  remainingSaleHours?: number;
  // percentOff: number;
}