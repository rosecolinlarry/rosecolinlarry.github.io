import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentComponent } from './department/department.component';
import { ShelfComponent } from './shelf/shelf.component';
import { RouterModule } from '@angular/router';
import { FantasyShopComponent } from './fantasy-shop.component';
import { MagicItemModule } from './magic-item/magic-item.module';
import { StorefrontModule } from './storefront/storefront.module';
import { SharedModule } from '../shared/shared.module';
import { FantasyShopRoutingModule } from './fantasy-shop-routing.module';

@NgModule({
  declarations: [
    DepartmentComponent,
    ShelfComponent,
    FantasyShopComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MagicItemModule,
    StorefrontModule,
    SharedModule,
    FantasyShopRoutingModule
  ],
  exports: [
    FantasyShopComponent,
    DepartmentComponent,
    ShelfComponent
  ]
})
export class FantasyShopModule { }
