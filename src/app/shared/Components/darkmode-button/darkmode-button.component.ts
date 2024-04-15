import { Component, HostBinding, OnInit } from '@angular/core';
import { ThemePickerService } from '../../services/theme-picker/theme-picker.service';
import { Observable } from 'rxjs';
import { ThemeOption } from '../../interfaces/theme-option.model';

@Component({
  selector: 'app-darkmode-button',
  templateUrl: './darkmode-button.component.html',
  styleUrls: ['./darkmode-button.component.scss']
})
export class DarkmodeButtonComponent implements OnInit {
  @HostBinding('class')
  options$: Observable<ThemeOption[]> = this.themePickerService.getThemeOptions();
  isDarkMode: boolean;
  constructor(private themePickerService: ThemePickerService) { 
    this.isDarkMode = themePickerService.currentTheme == themePickerService.darkTheme;
  }
  
  ngOnInit(): void {
    this.themePickerService.setTheme(this.themePickerService.getTheme());
  }

  onThemeChanged() {
    this.isDarkMode = !this.isDarkMode;
    const newTheme = this.isDarkMode ? this.themePickerService.darkTheme : this.themePickerService.lightTheme;
    this.themePickerService.setTheme(newTheme);
  }
}
