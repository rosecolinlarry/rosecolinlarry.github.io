import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiLibraryComponent } from '@apps/ui';
@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    imports: [CommonModule, UiLibraryComponent]
})
export class DashboardComponent {}
