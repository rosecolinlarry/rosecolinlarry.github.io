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
  title = 'A Dropshipped Product';
  @Input()
  totalReviews = 1697;
  @Input()
  averageStars = 4.83;
  @Input()
  sellerName = "A Real Shop";
  @Input()
  salePrice = 29.99;
  @Input()
  originalPrice = 69.99;
  @Input()
  verified = true;
  @Input()
  isFavorite = false;
  @Input()
  imageSrc = "https://i.imgur.com/is4kHp1.jpeg";
  @Input()
  get percentOff(): number {
    return this.onSale && this.originalPrice && this.salePrice ? this.salePrice / this.originalPrice : 0;
  }
  @Input()
  onSale = true;
  @Input()
  freeShipping = true;
}
