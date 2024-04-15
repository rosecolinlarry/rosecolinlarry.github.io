import { Component, HostBinding, OnInit } from '@angular/core';
import { ThemeOption } from '../../interfaces/theme-option.model';
import { ThemePickerService } from '../../services/theme-picker/theme-picker.service';
import { Observable } from 'rxjs';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-darkmode-switch',
  templateUrl: './darkmode-switch.component.html',
  styleUrls: ['./darkmode-switch.component.scss']
})
export class DarkmodeSwitchComponent implements OnInit {
  @HostBinding('class')
  options$: Observable<ThemeOption[]> = this.themePickerService.getThemeOptions();
  isDarkMode: boolean;
  constructor(private themePickerService: ThemePickerService) { 
    this.isDarkMode = themePickerService.currentTheme == themePickerService.darkTheme;
  }
  
  ngOnInit(): void {
    this.themePickerService.setTheme(this.themePickerService.getTheme());
  }

  onThemeChanged(e: MatSlideToggleChange) {
    const newTheme = e.checked ? this.themePickerService.darkTheme : this.themePickerService.lightTheme;
    this.themePickerService.setTheme(newTheme);
  }
}
