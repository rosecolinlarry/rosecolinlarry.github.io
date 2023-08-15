import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FibonacciComponent } from './coding-exercises/fibonacci/fibonacci.component';
import { ReverseIntComponent } from './coding-exercises/reverse-int/reverse-int.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'fibonacci', component: FibonacciComponent },
  { path: 'home', component: DashboardComponent },
  { path: '', component: DashboardComponent },
  { path: 'reversed-int', component: ReverseIntComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
