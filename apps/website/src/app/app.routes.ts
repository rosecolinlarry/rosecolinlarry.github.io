import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
export const appRoutes: Route[] = [
  { path: '', title: 'Home', component: DashboardComponent },
];
