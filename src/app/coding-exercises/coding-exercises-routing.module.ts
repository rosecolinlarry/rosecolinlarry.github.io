import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FibonacciComponent } from './fibonacci/fibonacci.component';
import { ReverseIntComponent } from './reverse-int/reverse-int.component';
import { CodingExercisesDashboardComponent } from './coding-exercises-dashboard/coding-exercises-dashboard.component';
import { CodingExercisesComponent } from './coding-exercises.component';

const routes: Routes = [
  {
    path: 'coding-exercises', component: CodingExercisesComponent, children: [
      { path: 'fibonacci', component: FibonacciComponent },
      { path: 'reversed-int', component: ReverseIntComponent },
      { path: 'home', component: CodingExercisesDashboardComponent }]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodingExercisesRoutingModule { }
