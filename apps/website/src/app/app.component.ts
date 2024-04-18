import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/router';
import { appRoutes } from './app.routes';
import { MainLayoutComponent } from './main-layout/main-layout.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterModule,
    CommonModule,
    MainLayoutComponent]
})
export class AppComponent {
  links: Route[] = appRoutes;
}
