import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-ui-library',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-library.component.html',
  styleUrl: './ui-library.component.scss',
})
export class UiLibraryComponent {}
