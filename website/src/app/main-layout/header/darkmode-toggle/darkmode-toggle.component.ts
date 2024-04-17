import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-darkmode-toggle',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './darkmode-toggle.component.html',
  styleUrl: './darkmode-toggle.component.scss'
})
export class DarkmodeToggleComponent {
  isDarkmode = true;
  constructor() {
  }
  onClick() {
    this.isDarkmode = !this.isDarkmode;
  }
}
