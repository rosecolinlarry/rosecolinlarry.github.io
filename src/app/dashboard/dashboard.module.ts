import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { MenuModule } from '../menu/menu.module';
import { MenuComponent } from '../menu/menu.component';



@NgModule({
  declarations: [
    DashboardComponent,
    MenuComponent
  ],
  imports: [
  ]
})
export class DashboardModule { }
