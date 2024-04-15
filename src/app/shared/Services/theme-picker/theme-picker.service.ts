import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeOption } from '../../interfaces/theme-option.model';
import { StyleManagerService } from '../style-manager/style-manager.service';

@Injectable({
  providedIn: 'root'
})
export class ThemePickerService {
  constructor(private http: HttpClient, private styleManager: StyleManagerService) { }

  LOCAL_STORAGE_KEY = "theme";
  defaultTheme = this.darkTheme;

  get lightTheme(): string { return "deeppurple-amber"; }
  get darkTheme(): string { return "purple-green"; }
  get currentTheme(): string {
    return this.getTheme();
  }

  getThemeOptions(): Observable<ThemeOption[]> {
    return this.http.get<ThemeOption[]>("assets/options.json")
  }

  setTheme(theme: string) {
    localStorage.setItem(this.LOCAL_STORAGE_KEY, theme);
    this.styleManager.setStyle(
      "theme",
      `../../../../assets/prebuilt-themes/${theme}.css`
    )
  }

  getTheme(): string {
    return localStorage.getItem(this.LOCAL_STORAGE_KEY) ?? this.defaultTheme;
  }
}
