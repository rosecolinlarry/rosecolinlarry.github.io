import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as products from '@rosecolinlarry/products';
import { DashboardCardComponent } from '../dashboard-card/dashboard-card.component';
import { GalleryComponent } from "../../../gallery.component";

@Component({
  selector: 'lib-sandbox-page',
  standalone: true,
  templateUrl: './sandbox-page.component.html',
  styleUrl: './sandbox-page.component.scss',
  imports: [
    CommonModule,
    products.FullStarRatingComponent,
    products.CondensedStarRatingComponent,
    DashboardCardComponent,
    GalleryComponent
],
})
export class SandboxPageComponent {}
