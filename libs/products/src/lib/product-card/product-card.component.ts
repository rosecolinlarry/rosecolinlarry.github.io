import { Component, Input } from '@angular/core';
import { CommonModule, CurrencyPipe, PercentPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CondensedStarRatingComponent } from './star-rating/condensed-star-rating/condensed-star-rating.component';
import { ProductCardInfo } from './product-card-info.interface';

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
    MatMenuModule,
  ],
})
export class ProductCardComponent {
  @Input()
  productInfo!: ProductCardInfo;
  get percentOff(): number | undefined {
    if (this.productInfo?.onSale && this.productInfo?.sellingPrice) {
      return (
        (this.productInfo?.sellingPrice - this.productInfo?.listPrice ?? 0) /
        this.productInfo?.sellingPrice
      );
    }
    return;
  }
  // TODO Show different number or add validation in service for saving product
  // info to have sellingPrice less than or equal to listingPrice?
  toggleFavorite() {
    if(this.productInfo) {
      this.productInfo.isFavorite = !this.productInfo.isFavorite;
    }
  }
}
