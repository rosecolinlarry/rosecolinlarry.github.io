import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorefrontComponent } from './storefront.component';
import { RouterModule } from '@angular/router';
import { MagicItemModule } from '../magic-item/magic-item.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [StorefrontComponent],
  imports: [
    CommonModule,
    RouterModule,
    MagicItemModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [
  ]
})
export class StorefrontModule { }
