import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouteData } from './shared/interfaces/route-data';
import { ProductsComponent } from '@rosecolinlarry/products';
import { OrderListComponent } from '@rosecolinlarry/orders';
import { StorefrontComponent } from '@rosecolinlarry/storefront';
import { PageNotFoundComponent } from '@rosecolinlarry/errors';

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
    component: StorefrontComponent,
    data: { iconName: 'storefront' } as RouteData,
    children: [
      {
        path: 'products',
        title: 'Products',
        component: ProductsComponent,
        data: { iconName: 'list' } as RouteData,
      },
      {
        path: 'orders',
        title: 'Orders',
        component: OrderListComponent,
        data: { iconName: 'list' } as RouteData,
      }
    ]
  },
  {
    path: '**', 
    title: 'Page Not Found',
    component: PageNotFoundComponent,
    data: { hideFromMenu: true} as RouteData,
  },
];
