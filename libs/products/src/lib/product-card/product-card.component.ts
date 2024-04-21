import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { StarRatingComponent } from "./star-rating/star-rating.component";

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
        StarRatingComponent
    ]
})
export class ProductCardComponent {

  @Input()
  title = 'A Product Card';
}
