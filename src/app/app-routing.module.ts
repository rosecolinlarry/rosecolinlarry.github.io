import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FibonacciComponent } from './coding-exercises/fibonacci/fibonacci.component';
import { ReverseIntComponent } from './coding-exercises/reverse-int/reverse-int.component';
import { DashboardComponent } from './coding-exercises/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'coding-exercises/fibonacci', component: FibonacciComponent },
  { path: 'coding-exercises/home', component: DashboardComponent },
  { path: 'coding-exercises/', component: DashboardComponent },
  { path: 'coding-exercises/reversed-int', component: ReverseIntComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
