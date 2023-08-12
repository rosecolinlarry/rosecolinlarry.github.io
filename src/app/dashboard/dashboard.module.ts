import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { MenuComponent } from '../menu/menu.component';
import { RouterLink } from '@angular/router';
@NgModule({
  declarations: [
    DashboardComponent,
    MenuComponent
  ],
  imports: [
    RouterLink
  ]
})
export class DashboardModule { }
