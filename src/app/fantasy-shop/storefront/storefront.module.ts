import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorefrontComponent } from './storefront.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [StorefrontComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class StorefrontModule { }
