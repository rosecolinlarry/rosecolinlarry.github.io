import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FibonacciSequenceGeneratorComponent } from './fibonacci-sequence-generator.component';
import { FibonacciModule } from '../fibonacci.module';

describe('FibonacciSequenceGeneratorComponent', () => {
  let component: FibonacciSequenceGeneratorComponent;
  let fixture: ComponentFixture<FibonacciSequenceGeneratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FibonacciSequenceGeneratorComponent],
      imports: [FibonacciModule]
    });
    fixture = TestBed.createComponent(FibonacciSequenceGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
