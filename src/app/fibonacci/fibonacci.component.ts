import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FibonacciService } from '../fibonacci.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, startWith, tap } from 'rxjs';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.scss']
})

export class FibonacciComponent {
  columnsToDisplay = ["index", "fibonacciNumber"]
  fibonacciNumber: number | undefined;
  fibonacciSequence: number[] = [];
  fibonacciTable: IDataRow[] = [];
  min = 0;
  max = 1;
  form = new FormGroup({
    min: new FormControl(this.min, [Validators.required]),
    max: new FormControl(this.max, [Validators.required])
  });

  constructor(private fibonacciService: FibonacciService) {
    this.form.valueChanges
      .pipe(tap(val => {
        this.min = val.min ?? this.min;
        this.max = val.max ?? this.max;
      }))
      .subscribe();
  }

  onSubmit(): void {
    // TODO Change so there is an option to just get a single fibonacci number
    // Flip values if max is less than min
    if (this.max < this.min) {
      const temp = this.max;
      this.max = this.min;
      this.min = temp;
    }

    this.form.setValue({ min: this.min, max: this.max });

    if (this.form.valid) {
      this.calculate(this.min, this.max);
    }
  }

  calculate(min: number, max: number): void {
    this.fibonacciNumber = this.getFibonacciNumber(max);

    const sequence = this.getFibonacciSequence(min, max);
    this.fibonacciTable = this.generateFibonacciTable(min, max, sequence);
    this.fibonacciSequence = sequence;
  }
  getFibonacciNumber(index: number): number {
    return this.fibonacciService.calculateFibonacci(index);
  }
  getFibonacciSequence(min: number, max: number): number[] {
    return this.fibonacciService.calculateFibonacciSequence(min, max);
  }

  generateFibonacciTable(min: number, max: number, fibonacciSequence: number[]): IDataRow[] {
    const rangeArray = this.fibonacciService.generateRangeArray(min, max);
    return rangeArray.map((indexVal, i) => {
      return <IDataRow>{ index: indexVal, val: fibonacciSequence[i] }
    })
  }

  reset() {
    this.form.reset();
  }
}

interface IDataRow {
  index: number;
  val: number;
}
