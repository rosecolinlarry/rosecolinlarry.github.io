import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DashboardCardComponent } from '@rosecolinlarry/shared-ui';
import { ProductCardComponent } from '@rosecolinlarry/products';

@Component({
  selector: 'lib-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrl: './product-dashboard.component.scss',
  standalone: true,
  imports: [
    AsyncPipe,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    DashboardCardComponent,
    ProductCardComponent
  ]
})
export class ProductDashboardComponent {
}
