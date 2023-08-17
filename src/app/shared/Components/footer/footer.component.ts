import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ThemePickerService } from '../../Services/theme-picker/theme-picker.service';
import { ThemeOption } from '../../Interfaces/theme-option.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  options$: Observable<ThemeOption[]> = this.themePickerService.getThemeOptions();

  constructor(private themePickerService: ThemePickerService) { }

  ngOnInit(): void {
    this.themePickerService.setTheme("deeppurple-amber");
  }
  themeChangeHandler(theme: string) {
    this.themePickerService.setTheme(theme);
  }
}
