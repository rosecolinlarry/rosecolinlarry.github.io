import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CondensedStarRatingComponent, FullStarRatingComponent } from '@rosecolinlarry/products';
import { DashboardCardComponent } from "../dashboard-card/dashboard-card.component";

@Component({
    selector: 'lib-sandbox-page',
    standalone: true,
    templateUrl: './sandbox-page.component.html',
    styleUrl: './sandbox-page.component.scss',
    imports: [CommonModule, FullStarRatingComponent, CondensedStarRatingComponent, DashboardCardComponent]
})
export class SandboxPageComponent {}
