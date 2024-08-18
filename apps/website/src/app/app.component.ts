import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { FooterComponent } from "./main-layout/footer/footer.component";
import { HeaderComponent } from "./main-layout/header/header.component";

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterModule, CommonModule, MainLayoutComponent, FooterComponent, HeaderComponent],
})
export class AppComponent {}
