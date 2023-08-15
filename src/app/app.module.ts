import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TerminalComponent } from './terminal/terminal.component';
import { FooterComponent } from './footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { TopnavModule } from './topnav/topnav.module';
import { FibonacciModule } from './coding-exercises/fibonacci/fibonacci.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ReverseIntModule } from './coding-exercises/reverse-int/reverse-int.module';

@NgModule({
  declarations: [
    AppComponent,
    TerminalComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    TopnavModule,
    FibonacciModule,
    DashboardModule,
    ReverseIntModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AppRoutingModule]
})
export class AppModule { }
