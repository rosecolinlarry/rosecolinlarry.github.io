import { Component, OnInit } from '@angular/core';
import { ThemeOption } from '../../interfaces/theme-option.model';
import { Observable } from 'rxjs';
import { ThemePickerService } from '../../services/theme-picker/theme-picker.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  options$: Observable<ThemeOption[]> = this.themePickerService.getThemeOptions();

  constructor(private themePickerService: ThemePickerService) { }

  ngOnInit(): void {
    this.themePickerService.setTheme(this.themePickerService.getTheme());
  }
  themeChangeHandler(theme: string) {
    this.themePickerService.setTheme(theme);
  }
}
