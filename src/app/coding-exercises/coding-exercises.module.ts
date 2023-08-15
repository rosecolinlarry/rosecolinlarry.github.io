import { NgModule } from '@angular/core';
import { CodingExercisesComponent } from './coding-exercises.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { TopnavModule } from './topnav/topnav.module';
import { FibonacciModule } from './fibonacci/fibonacci.module';
import { ReverseIntModule } from './reverse-int/reverse-int.module';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    CodingExercisesComponent,
    FooterComponent
  ],
  imports: [
    RouterModule,
    TopnavModule,
    FibonacciModule,
    DashboardModule,
    ReverseIntModule
  ],
  exports: [
    CodingExercisesComponent]
})
export class CodingExercisesModule { }
