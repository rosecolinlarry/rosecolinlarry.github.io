import { NgModule } from '@angular/core';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { FooterComponent } from './Components/footer/footer.component';
import { TopnavComponent } from './Components/topnav/topnav.component';
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
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { ThemeMenuComponent } from './Components/footer/theme-menu/theme-menu.component';

@NgModule({
  declarations: [
    DashboardComponent,
    FooterComponent,
    TopnavComponent,
    MainLayoutComponent,
    ThemeMenuComponent
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
    MatSlideToggleModule,
    MatMenuModule
  ],
  exports: [
    DashboardComponent,
    FooterComponent,
    TopnavComponent,
    FooterComponent
  ]
})

export class SharedModule { }
