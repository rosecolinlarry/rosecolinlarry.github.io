import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouteData } from './shared/interfaces/route-data';
import { ShopComponent } from './shop/shop.component';

export const appRoutes: Route[] = [
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
];
