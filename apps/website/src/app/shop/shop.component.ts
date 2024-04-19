import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkmodeButtonComponent } from '@libs/ui';
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
    DarkmodeButtonComponent,
    MatButtonModule,
    MatCardModule,
    ShopItemComponent,
  ],
})
export class ShopComponent {}
