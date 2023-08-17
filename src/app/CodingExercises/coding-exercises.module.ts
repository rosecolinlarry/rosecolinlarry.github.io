import { NgModule } from '@angular/core';
import { CodingExercisesComponent } from './coding-exercises.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../Shared/shared.module';
import { ReverseIntModule } from './reverse-int/reverse-int.module';
import { CommonModule } from '@angular/common';
import { FibonacciModule } from './fibonacci/fibonacci.module';
import { CodingExercisesRoutingModule } from './coding-exercises-routing.module';
import { CodingExercisesDashboardComponent } from './coding-exercises-dashboard/coding-exercises-dashboard.component';

@NgModule({
  declarations: [
    CodingExercisesComponent,
    CodingExercisesDashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FibonacciModule,
    ReverseIntModule,
    CodingExercisesRoutingModule
  ],
  exports: [
    CodingExercisesComponent,
    CodingExercisesDashboardComponent
  ]
})
export class CodingExercisesModule { }
