import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimatedSidebarToggleButtonComponent } from "./animated-sidebar-toggle-button/animated-sidebar-toggle-button.component";

@Component({
  selector: 'lib-rainbow-sidebar',
  standalone: true,
  templateUrl: './rainbow-sidebar.component.html',
  styleUrl: './rainbow-sidebar.component.scss',
  imports: [CommonModule, AnimatedSidebarToggleButtonComponent]
})
export class RainbowSidebarComponent {
  // Toggles if sidebar is open
  isOpen: boolean;

  constructor() {
    this.isOpen = false;
  }

  openSidebar() {
    this.isOpen = !this.isOpen;
  }
}
