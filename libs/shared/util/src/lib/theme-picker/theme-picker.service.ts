import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemePickerService {
  LOCAL_STORAGE_KEY = 'theme';
  lightModeClassName = 'light-mode';
  darkModeClassName = 'dark-mode';
  defaultTheme = this.darkModeClassName;

  get currentTheme(): string {
    return this.getTheme();
  }
  get isDarkMode(): boolean {
    return this.currentTheme == this.darkModeClassName;
  }

  setTheme() {
    
    if (this.isDarkMode) {
      document.body.classList.remove(this.darkModeClassName); // Remove darkmode
      document.body.classList.add(this.lightModeClassName); // Add lightmode
      localStorage.setItem(this.LOCAL_STORAGE_KEY, this.lightModeClassName); // Store darkmode as current theme
    }
    else {
      document.body.classList.add(this.darkModeClassName); // Add darmmode
      document.body.classList.remove(this.lightModeClassName); // Remove lightmode
      localStorage.setItem(this.LOCAL_STORAGE_KEY, this.darkModeClassName); // Store darkmode as current theme
    }
  }

  getTheme(): string {
    return localStorage.getItem(this.LOCAL_STORAGE_KEY) ?? this.defaultTheme;
  }
}
