import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FibonacciComponent } from './fibonacci.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FibonacciComponent', () => {
  let component: FibonacciComponent;
  let fixture: ComponentFixture<FibonacciComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FibonacciComponent],
      imports: [MatFormFieldModule, ReactiveFormsModule, MatInputModule, BrowserAnimationsModule]
    });
    fixture = TestBed.createComponent(FibonacciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
