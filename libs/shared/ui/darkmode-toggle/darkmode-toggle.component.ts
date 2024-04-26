import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ThemePickerService } from '@rosecolinlarry/theming';

@Component({
  selector: 'lib-darkmode-toggle',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './darkmode-toggle.component.html',
  styleUrl: './darkmode-toggle.component.scss',
})
export class DarkmodeToggleComponent {
  isDarkMode: boolean;
  constructor(private themePickerService: ThemePickerService) {
    this.isDarkMode = this.themePickerService.isDarkMode;
  }

  onClick() {
    this.themePickerService.setTheme();
    this.isDarkMode = this.themePickerService.isDarkMode;
  }
}
