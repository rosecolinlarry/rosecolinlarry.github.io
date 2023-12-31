import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StyleManagerService } from '../style-manager/style-manager.service';
import { Observable } from 'rxjs';
import { ThemeOption } from '../../Interfaces/theme-option.model';

@Injectable({
  providedIn: 'root'
})
export class ThemePickerService {
  constructor(private http: HttpClient, private styleManager: StyleManagerService) { }

  LOCAL_STORAGE_KEY = "theme";
  defaultTheme = "pink-bluegrey";
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
