import { Injectable } from '@angular/core';
import { StyleManagerService } from '../style-manager/style-manager.service';

@Injectable({
  providedIn: 'root'
})
export class ThemePickerService {
  constructor(private styleManager: StyleManagerService) { }

  LOCAL_STORAGE_KEY = "theme";
  defaultTheme = this.darkTheme;

  get lightTheme(): string { return "deeppurple-amber"; }
  get darkTheme(): string { return "purple-green"; }
  get currentTheme(): string {
    return this.getTheme();
  }

  setTheme(theme: string) {
    localStorage.setItem(this.LOCAL_STORAGE_KEY, theme);
    this.styleManager.setStyle(
      "theme",
      `assets/themes/${theme}.css`
    )
  }

  getTheme(): string {
    return localStorage.getItem(this.LOCAL_STORAGE_KEY) ?? this.defaultTheme;
  }
}
