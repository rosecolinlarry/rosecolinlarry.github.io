import { Route } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';

export const appRoutes: Route[] = [
  { path: '', title: 'Home', component: MainLayoutComponent },
];
