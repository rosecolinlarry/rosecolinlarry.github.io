import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CondensedStarRatingComponent, FullStarRatingComponent } from '@rosecolinlarry/products';

@Component({
  selector: 'lib-sandbox-page',
  standalone: true,
  imports: [CommonModule, FullStarRatingComponent, CondensedStarRatingComponent],
  templateUrl: './sandbox-page.component.html',
  styleUrl: './sandbox-page.component.scss',
})
export class SandboxPageComponent {}
