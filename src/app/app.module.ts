import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TerminalComponent } from './terminal/terminal.component';
import { FooterComponent } from './footer/footer.component';
import { ReverseIntComponent } from './reverse-int/reverse-int.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { TopnavModule } from './topnav/topnav.module';
import { FibonacciModule } from './fibonacci/fibonacci.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    TerminalComponent,
    FooterComponent,
    ReverseIntComponent
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
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AppRoutingModule]
})
export class AppModule { }
