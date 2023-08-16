import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { TopnavComponent } from './topnav/topnav.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CodingExercisesModule } from '../coding-exercises/coding-exercises.module';
@NgModule({
  declarations: [
    DashboardComponent,
    FooterComponent,
    TopnavComponent,
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    RouterModule,
    MatDialogModule,
    MatSlideToggleModule
  ],
  exports: [
    DashboardComponent,
    FooterComponent,
    TopnavComponent,
    FooterComponent
  ]
})

export class SharedModule { }
