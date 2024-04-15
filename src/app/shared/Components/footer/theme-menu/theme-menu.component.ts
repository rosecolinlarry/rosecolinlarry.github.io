import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ThemeOption } from 'src/app/shared/interfaces/theme-option.model';

@Component({
  selector: 'app-theme-menu',
  templateUrl: './theme-menu.component.html',
  styleUrls: ['./theme-menu.component.css']
})
export class ThemeMenuComponent {
  @Input() options: ThemeOption[] | null = [];
  @Output() themeChange: EventEmitter<string> = new EventEmitter<string>();

  changeTheme(theme: string) {
    this.themeChange.emit(theme);
  }
}
