import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReverseIntComponent } from './reverse-int.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ReverseIntComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    SharedModule
  ],
  exports: [ReverseIntComponent]
})
export class ReverseIntModule { }
