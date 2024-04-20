import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ShopItemComponent } from './shop-item/shop-item.component';
@Component({
  selector: 'app-shop',
  standalone: true,
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    ShopItemComponent,
  ],
})
export class ShopComponent {}
