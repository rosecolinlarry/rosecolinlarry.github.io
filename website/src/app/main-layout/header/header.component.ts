import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DarkmodeToggleComponent } from "./darkmode-toggle/darkmode-toggle.component";
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [MatToolbarModule, MatIconModule, DarkmodeToggleComponent, AsyncPipe]
})
export class HeaderComponent {
  @Input()
  snav: any;
}
