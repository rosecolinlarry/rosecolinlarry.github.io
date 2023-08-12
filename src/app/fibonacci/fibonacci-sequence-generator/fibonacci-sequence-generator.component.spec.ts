import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FibonacciSequenceGeneratorComponent } from './fibonacci-sequence-generator.component';
import { FibonacciModule } from '../fibonacci.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FibonacciSequenceGeneratorComponent', () => {
  let component: FibonacciSequenceGeneratorComponent;
  let fixture: ComponentFixture<FibonacciSequenceGeneratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FibonacciSequenceGeneratorComponent],
      imports: [FibonacciModule, BrowserAnimationsModule]
    });
    fixture = TestBed.createComponent(FibonacciSequenceGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
