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

  getThemeOptions(): Observable<ThemeOption[]> {
    return this.http.get<ThemeOption[]>("assets/options.json")
  }

  setTheme(theme: string) {
    this.styleManager.setStyle(
      "theme",
      `../../../../assets/prebuilt-themes/${theme}.css`
    )
  }
}
