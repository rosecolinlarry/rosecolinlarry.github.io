import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-condensed-star-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './condensed-star-rating.component.html',
  styleUrl: './condensed-star-rating.component.scss',
})
export class CondensedStarRatingComponent {
  @Input()
  averageStars = 0;
  @Input()
  totalReviews = 0;
}
