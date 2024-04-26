import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenav } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DarkmodeToggleComponent } from '../darkmode-toggle/darkmode-toggle.component'
import { AnimatedSidebarToggleButtonComponent } from "../rainbow-sidebar/animated-sidebar-toggle-button/animated-sidebar-toggle-button.component";

@Component({
    selector: 'lib-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    imports: [CommonModule, MatToolbarModule, MatIconModule, DarkmodeToggleComponent, AnimatedSidebarToggleButtonComponent]
})
export class HeaderComponent {
  @Input()
  drawer!: MatSidenav;  

  openSidebar() {
    this.drawer.toggle();
  }
}
