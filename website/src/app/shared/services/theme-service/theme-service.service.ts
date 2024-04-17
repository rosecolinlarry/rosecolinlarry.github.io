import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Theme } from '../../interfaces/theme';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  static defaultTheme: Theme = {
    displayName: 'Dark Mode',
    name: 'dark-purple-green',
    isDark: true,
    isDefault: true
  }

  // Names defined in angular.json
  themes: Theme[] = [
    {
      displayName: 'Light Mode',
      name: 'light-deeppurple-amber',
      isDark: false
    },
    ThemeService.defaultTheme
  ]

  private theme$ = new BehaviorSubject(ThemeService.defaultTheme); // Store current Theme
  theme = this.theme$.asObservable();
  constructor() { }

  updateTheme(theme: Theme): void {
    
  }

}
