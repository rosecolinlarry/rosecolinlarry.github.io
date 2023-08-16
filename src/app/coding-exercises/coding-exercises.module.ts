import { NgModule } from '@angular/core';
import { CodingExercisesComponent } from './coding-exercises.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ReverseIntModule } from './reverse-int/reverse-int.module';
import { CommonModule } from '@angular/common';
import { FibonacciModule } from './fibonacci/fibonacci.module';

@NgModule({
  declarations: [
    CodingExercisesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FibonacciModule,
    ReverseIntModule,
  ],
  exports: [
    CodingExercisesComponent
  ]
})
export class CodingExercisesModule { }
