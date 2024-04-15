import { NgModule } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { TopnavComponent } from './components/topnav/topnav.component';
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
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { ThemeMenuComponent } from './components/footer/theme-menu/theme-menu.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { DarkmodeSwitchComponent } from './components/darkmode-switch/darkmode-switch.component';

@NgModule({
  declarations: [
    FooterComponent,
    TopnavComponent,
    MainLayoutComponent,
    ThemeMenuComponent,
    DashboardComponent
  , DarkmodeSwitchComponent],
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
    MatMenuModule,
    MatGridListModule
  ],
  exports: [
    FooterComponent,
    TopnavComponent,
    FooterComponent,
    DashboardComponent
  ]
})

export class SharedModule { }
