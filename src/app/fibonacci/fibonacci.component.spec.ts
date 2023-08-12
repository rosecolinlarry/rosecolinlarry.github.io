import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FibonacciComponent } from './fibonacci.component';
import { FibonacciModule } from './fibonacci.module';

describe('FibonacciComponent', () => {
  let component: FibonacciComponent;
  let fixture: ComponentFixture<FibonacciComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FibonacciComponent],
      imports: [FibonacciModule]
    });
    fixture = TestBed.createComponent(FibonacciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
