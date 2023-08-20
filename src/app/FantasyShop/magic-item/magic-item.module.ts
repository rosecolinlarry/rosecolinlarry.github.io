import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MagicItemCardComponent } from './magic-item-card/magic-item-card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MagicItemComponent } from './magic-item.component';



@NgModule({
  declarations: [MagicItemCardComponent, MagicItemComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  exports: [MagicItemCardComponent, MagicItemComponent]
})
export class MagicItemModule { }
