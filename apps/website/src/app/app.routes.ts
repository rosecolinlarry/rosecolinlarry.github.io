import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouteData } from './shared/interfaces/route-data';
import { ShopComponent } from './shop/shop.component';
import { ProductListComponent } from '@rosecolinlarry/products';
import { OrderListComponent } from '@rosecolinlarry/orders';

export const appRoutes: Routes = [
  {
    path: '',
    title: 'Home',
    component: DashboardComponent,
    data: { iconName: 'home' } as RouteData,
  },
  {
    path: 'shop',
    title: 'Shop',
    component: ShopComponent,
    data: { iconName: 'storefront' } as RouteData,
  },
  {
    path: 'products',
    title: 'Products',
    component: ProductListComponent,
    data: { iconName: 'list' } as RouteData,
  },
  {
    path: 'orders',
    title: 'Orders',
    component: OrderListComponent,
    data: { iconName: 'list' } as RouteData,
  }
];
