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
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    DashboardComponent,
    FooterComponent,
    TopnavComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterModule.forRoot([]),
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  exports: [
    DashboardComponent,
    FooterComponent,
    TopnavComponent
  ]
})

export class SharedModule { }
