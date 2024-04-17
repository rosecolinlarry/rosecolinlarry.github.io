import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkmodeButtonComponent } from '@libs/ui';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  imports: [CommonModule, DarkmodeButtonComponent],
})
export class DashboardComponent {}
