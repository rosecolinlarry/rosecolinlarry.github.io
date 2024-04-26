import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { RainbowSidebarComponent } from '@rosecolinlarry/shared-ui';
import { HeaderComponent } from './main-layout/header/header.component';
import { FooterComponent } from "./main-layout/footer/footer.component";
import { HeaderFooterPageLayoutComponent } from "../../../../libs/shared/ui/header-footer-page-layout/header-footer-page-layout.component";
import { appRoutes } from './app.routes';

@Component({
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        RouterModule,
        CommonModule,
        MainLayoutComponent,
        RainbowSidebarComponent,
        HeaderComponent,
        FooterComponent,
        HeaderFooterPageLayoutComponent
    ]
})
export class AppComponent {
    routes = appRoutes;
}
