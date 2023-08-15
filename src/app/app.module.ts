import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { FibonacciComponent } from './coding-exercises/fibonacci/fibonacci.component';
import { ReverseIntComponent } from './coding-exercises/reverse-int/reverse-int.component';

@NgModule({
  declarations: [
    AppComponent,
    FibonacciComponent,
    ReverseIntComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
