import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-animated-sidebar-toggle-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animated-sidebar-toggle-button.component.html',
  styleUrl: './animated-sidebar-toggle-button.component.scss',
})
export class AnimatedSidebarToggleButtonComponent {
  @Output() toggleEvent = new EventEmitter<void>();

  toggle() {
    this.toggleEvent.emit();
  }
}
