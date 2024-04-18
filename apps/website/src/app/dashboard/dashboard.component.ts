import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkmodeButtonComponent } from '@libs/ui';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  imports: [CommonModule, DarkmodeButtonComponent, MatButtonModule, MatCardModule],
})
export class DashboardComponent { }

