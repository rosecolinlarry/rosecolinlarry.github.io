import { Component, OnInit, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DashboardCardComponent } from '@rosecolinlarry/shared-ui'
import { DashboardMiniCardComponent } from "../../../../shared/ui/src/lib/dashboard-mini-card/dashboard-mini-card.component";
import { StoreSummaryService, StoreSummary } from '@rosecolinlarry/shared-util';

@Component({
  selector: 'lib-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrl: './product-dashboard.component.scss',
  standalone: true,
  imports: [
    AsyncPipe,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    DashboardCardComponent,
    DashboardMiniCardComponent
  ]
})
export class ProductDashboardComponent implements OnInit {
  miniCardData: StoreSummary[] = [
    { title: "Total Sales", value: "9465", isIncrease: true, color: "primary", percentValue: "0.5383", icon: "payments", isCurrency: true },
    { title: "Average Order Value", value: "465", isIncrease: false, color: "accent", percentValue: "0.2544", icon: "local_atm", isCurrency: true },
    { title: "Total Orders", value: "243", isIncrease: true, color: "warn", percentValue: "0.4565", icon: "shopping_cart", isCurrency: false },
    { title: "Returning Customers", value: "35", isIncrease: false, color: "primary", percentValue: "0.8361", icon: "portrait", isCurrency: false }
  ];
  
  constructor(private breakpointObserver: BreakpointObserver, private summaryService: StoreSummaryService) { }

  ngOnInit() {
    this.summaryService.getStoreSummary().subscribe({
      next: summaryData => {
        this.miniCardData = summaryData;
      }
    });
  }
  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          miniCard: { cols: 1, rows: 1 },
          chart: { cols: 1, rows: 2 },
          table: { cols: 1, rows: 4 },
        };
      }

      return {
        columns: 4,
        miniCard: { cols: 1, rows: 1 },
        chart: { cols: 2, rows: 2 },
        table: { cols: 4, rows: 4 },
      };
    })
  );
}
