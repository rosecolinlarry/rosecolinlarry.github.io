import { NgModule } from '@angular/core';
import { CodingExercisesComponent } from './coding-exercises.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FibonacciModule } from './fibonacci/fibonacci.module';
import { ReverseIntModule } from './reverse-int/reverse-int.module';

@NgModule({
  declarations: [
    CodingExercisesComponent
  ],
  imports: [
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
