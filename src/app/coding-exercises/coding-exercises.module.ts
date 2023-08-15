import { NgModule } from '@angular/core';
import { CodingExercisesComponent } from './coding-exercises.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FibonacciModule } from './fibonacci/fibonacci.module';
import { ReverseIntModule } from './reverse-int/reverse-int.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CodingExercisesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FibonacciModule,
    ReverseIntModule,
    SharedModule
  ],
  exports: [
    CodingExercisesComponent
  ]
})
export class CodingExercisesModule { }
