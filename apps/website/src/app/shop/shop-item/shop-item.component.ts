import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkmodeButtonComponent } from '@libs/ui';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-shop-item',
  standalone: true,
  templateUrl: './shop-item.component.html',
  styleUrl: './shop-item.component.scss',
  imports: [
    CommonModule,
    DarkmodeButtonComponent,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
  ],
})
export class ShopItemComponent {}
