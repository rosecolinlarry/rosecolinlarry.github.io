import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { Route, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { appRoutes } from '../app.routes';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './footer/footer.component';
import { RouteData } from '../shared/interfaces/route-data';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
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
    LandingPageComponent,
    HeaderComponent,
    FooterComponent,
  ],
})
export class MainLayoutComponent {
  links: Route[] = appRoutes;
  private breakpointObserver = inject(BreakpointObserver);
  getlistIcon(link: Route): string | undefined {
    return (link.data as RouteData).iconName;
  }
  getIsActive(link: Route): boolean {
    return (link.data as RouteData).isActive ?? false;
  }

  // Get menu items to display
  get menuItems(): Route[] {
    const items = appRoutes.filter(x => {
      const data = x.data as RouteData;
      return !data.hideFromMenu;
    })
    return items;
  }

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
}
