import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FibonacciSequenceGeneratorComponent } from './fibonacci-sequence-generator/fibonacci-sequence-generator.component';
import { FibonacciNumberGeneratorComponent } from './fibonacci-number-generator/fibonacci-number-generator.component';
import { FibonacciComponent } from './fibonacci.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { ReverseIntService } from './services/reverse-int.service';
import { RecursiveService } from './services/recursive.service';
import { FastDoublingService } from './services/fast-doubling.service';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    FibonacciSequenceGeneratorComponent,
    FibonacciNumberGeneratorComponent,
    FibonacciComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatTableModule,
    MatCardModule
  ],
  providers: [
    ReverseIntService,
    RecursiveService,
    FastDoublingService
  ],
  exports: [
    FibonacciComponent,
    FibonacciNumberGeneratorComponent,
    FibonacciSequenceGeneratorComponent
  ]
})
export class FibonacciModule { }
