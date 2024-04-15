import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FibonacciNumberGeneratorComponent } from './fibonacci-number-generator.component';
import { FibonacciModule } from '../fibonacci.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FibonacciNumberGeneratorComponent', () => {
  let component: FibonacciNumberGeneratorComponent;
  let fixture: ComponentFixture<FibonacciNumberGeneratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FibonacciNumberGeneratorComponent],
      imports: [FibonacciModule, BrowserAnimationsModule]
    });
    fixture = TestBed.createComponent(FibonacciNumberGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
