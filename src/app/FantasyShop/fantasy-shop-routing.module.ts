import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FantasyShopComponent } from './fantasy-shop.component';
import { StorefrontComponent } from './storefront/storefront.component';

const routes: Routes = [
  {
    path: 'fantasy-shop', component: FantasyShopComponent, children: [
      { path: 'store-front', component: StorefrontComponent},
      { path: 'home', component: StorefrontComponent }]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FantasyShopRoutingModule { }
