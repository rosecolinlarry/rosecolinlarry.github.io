import { Component, Input, ViewChild, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {
  Route,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouteData } from '../interfaces/route-data';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { AnimatedSidebarToggleButtonComponent } from "../rainbow-sidebar/animated-sidebar-toggle-button/animated-sidebar-toggle-button.component";

@Component({
  selector: 'lib-header-footer-page-layout',
  templateUrl: './header-footer-page-layout.component.html',
  styleUrl: './header-footer-page-layout.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    HeaderComponent,
    FooterComponent,
    AnimatedSidebarToggleButtonComponent
  ]
})
export class HeaderFooterPageLayoutComponent {
  @ViewChild('drawer')
  drawer!: MatSidenav

  @Input()
  links: Route[] = [];
  private breakpointObserver = inject(BreakpointObserver);
  getlistIcon(link: Route): string | undefined {
    return (link.data as RouteData).iconName;
  }
  getIsActive(link: Route): boolean {
    return (link.data as RouteData).isActive ?? false;
  }

  // Get menu items to display
  get menuItems(): Route[] {
    const items = this.links.filter((x) => {
      const data = x.data as RouteData;
      return !data.hideFromMenu;
    });
    return items;
  }

  openSidebar() {
    this.drawer.toggle();
  }

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
}
