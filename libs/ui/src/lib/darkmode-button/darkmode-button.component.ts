import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ThemePickerService } from '../theming/theme-picker/theme-picker.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'lib-darkmode-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  providers: [ThemePickerService, HttpClient],
  templateUrl: './darkmode-button.component.html',
  styleUrl: './darkmode-button.component.scss',
})
export class DarkmodeButtonComponent {
  isDarkMode: boolean;
  themePickerService: ThemePickerService;
  constructor(themePickerService: ThemePickerService) {
    this.themePickerService = themePickerService;
    this.isDarkMode = this.themePickerService.isDarkMode;
  }

  onClick() {
    this.themePickerService.setTheme();
    this.isDarkMode = this.themePickerService.isDarkMode;
  }
}
