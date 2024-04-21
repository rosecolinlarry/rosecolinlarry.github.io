import { CommonModule, JsonPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-full-star-rating',
  standalone: true,
  imports: [CommonModule, JsonPipe],
  templateUrl: './full-star-rating.component.html',
  styleUrl: './full-star-rating.component.scss',
})
export class FullStarRatingComponent implements OnInit {
  @Input()
  filledStars = 0;
  @Input()
  halfStars = 0;
  @Input()
  emptyStars = 0;

  filledStarsArray = [];
  halfStarsArray = [];
  emptyStarsArray = [];

  ngOnInit(): void {
    this.filledStarsArray.length = this.filledStars
    this.halfStarsArray.length = this.halfStars
    this.emptyStarsArray.length = this.emptyStars
  }
}