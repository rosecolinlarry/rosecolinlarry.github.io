import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RouteData } from './shared/interfaces/route-data';
import { OrderListComponent } from '@rosecolinlarry/orders';
import { StorefrontComponent } from '@rosecolinlarry/storefront';
import { PageNotFoundComponent } from '@rosecolinlarry/errors';
import { SandboxPageComponent } from '@rosecolinlarry/shared-ui';

export const appRoutes: Routes = [
  {
    path: '',
    title: 'Home',
    component: LandingPageComponent,
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
        component: StorefrontComponent,
        data: { iconName: 'list' } as RouteData,
      },
      {
        path: 'orders',
        title: 'Orders',
        component: OrderListComponent,
        data: { iconName: 'list' } as RouteData,
      },
    ],
  },
  {
    path: 'sandbox',
    title: 'Sandbox',
    component: SandboxPageComponent,
    data: { iconName: 'science' } as RouteData,
  },
  {
    path: '**',
    title: 'Page Not Found',
    component: PageNotFoundComponent,
    data: { hideFromMenu: true } as RouteData,
  },
];
