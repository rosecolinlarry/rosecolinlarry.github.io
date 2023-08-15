import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FibonacciNumberGeneratorComponent } from './fibonacci-number-generator/fibonacci-number-generator.component';
import { FibonacciSequenceGeneratorComponent } from './fibonacci-sequence-generator/fibonacci-sequence-generator.component';
import { FibonacciComponent } from './fibonacci.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    FibonacciComponent,
    FibonacciSequenceGeneratorComponent,
    FibonacciNumberGeneratorComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatButtonToggleModule,
    SharedModule
  ],
  exports: [
    FibonacciComponent,
    FibonacciNumberGeneratorComponent,
    FibonacciSequenceGeneratorComponent
  ]
})
export class FibonacciModule { }
