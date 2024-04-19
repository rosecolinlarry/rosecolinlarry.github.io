import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
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
  @Input()
  isDarkmode: boolean;
  @Output() toggleDarkmode: EventEmitter<boolean> = new EventEmitter();
  constructor(private themePickerService: ThemePickerService) {
    this.isDarkmode =
      themePickerService.currentTheme == themePickerService.darkTheme;
  }

  onClick() {
    this.isDarkmode = !this.isDarkmode;
    this.toggleDarkmode.emit(this.isDarkmode);
    const newTheme = this.isDarkmode
      ? this.themePickerService.darkTheme
      : this.themePickerService.lightTheme;
    this.themePickerService.setTheme(newTheme);
  }
}
