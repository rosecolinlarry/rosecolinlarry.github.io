import { Component, Input } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'lib-star-rating',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss',
})
export class StarRatingComponent {
  @Input()
  rating = 0

  calculateStars(): StarArray {
    const filled = this.rating%5;
    return { filled: filled, half: 0, empty: 0 }
  }
}

export interface StarArray {
  filled: number;
  half: number;
  empty: number;
}