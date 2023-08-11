import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FibonacciComponent } from './fibonacci/fibonacci.component';
import { TerminalComponent } from './terminal/terminal.component';
import { FooterComponent } from './footer/footer.component';
import { ReverseIntComponent } from './reverse-int/reverse-int.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { TopnavModule } from './topnav/topnav.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    FibonacciComponent,
    TerminalComponent,
    FooterComponent,
    ReverseIntComponent,
    DashboardComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    TopnavModule,
    MatFormFieldModule,
    MatCardModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AppRoutingModule]
})
export class AppModule { }
