import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FibonacciComponent } from './coding-exercises/fibonacci/fibonacci.component';
import { ReverseIntComponent } from './coding-exercises/reverse-int/reverse-int.component';
import { StorefrontComponent } from './fantasy-shop/storefront/storefront.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'coding-exercises/fibonacci', component: FibonacciComponent },
  { path: 'coding-exercises/home', component: DashboardComponent },
  { path: 'coding-exercises/', component: DashboardComponent },
  { path: 'coding-exercises/reversed-int', component: ReverseIntComponent },
  { path: 'fantasy-shop/', component: StorefrontComponent},
  { path: '', component: AppComponent},
  { path: '/', component: AppComponent},
  { path: 'home/', component: AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
