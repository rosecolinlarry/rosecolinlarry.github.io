import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopnavComponent } from './topnav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    TopnavComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterLink,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    TopnavComponent
  ]
})
export class TopnavModule { }
