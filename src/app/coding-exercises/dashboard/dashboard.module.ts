import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { MenuComponent } from '../menu/menu.component';
import { RouterLink, RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    DashboardComponent,
    MenuComponent
  ],
  imports: [
    RouterLink,
    RouterModule.forRoot([])
  ],
  exports: [
    DashboardComponent,
    MenuComponent
  ]
})
export class DashboardModule { }
