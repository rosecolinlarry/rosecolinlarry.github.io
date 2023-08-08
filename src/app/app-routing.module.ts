import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FibonacciComponent } from './fibonacci/fibonacci.component';
import { ReverseIntComponent } from './reverse-int/reverse-int.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
{path: 'fibonacci', component: FibonacciComponent},
{path: 'home', component: DashboardComponent},
{path: 'reversed-int', component: ReverseIntComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
