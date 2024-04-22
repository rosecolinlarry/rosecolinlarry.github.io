import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { ProductCardComponent } from '@rosecolinlarry/products';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ProductDashboardComponent } from '../product-dashboard/product-dashboard.component';

@Component({
  selector: 'lib-storefront',
  standalone: true,
  templateUrl: './storefront.component.html',
  styleUrl: './storefront.component.scss',
  imports: [
    CommonModule,
    MatGridListModule,
    MatButtonModule,
    ProductCardComponent,
    MatCardModule,
    MatIconModule,
    ProductDashboardComponent,
  ],
})
export class StorefrontComponent {}
