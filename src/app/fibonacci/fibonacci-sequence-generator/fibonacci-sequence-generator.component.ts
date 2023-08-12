import { Component } from '@angular/core';
import { FibonacciService } from '../../fibonacci.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-fibonacci-sequence-generator',
  templateUrl: './fibonacci-sequence-generator.component.html',
  styleUrls: ['./fibonacci-sequence-generator.component.scss']
})
export class FibonacciSequenceGeneratorComponent {

  columnsToDisplay = ["index", "fibonacciNumber"]
  fibonacciSequence: number[] = [];
  fibonacciTable: IDataRow[] = [];
  showTable = false;
  dataSource = new MatTableDataSource<IDataRow>();
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
    // Flip values if max is less than min
    if (this.max < this.min) {
      const temp = this.max;
      this.max = this.min;
      this.min = temp;
    }

    this.form.setValue({ min: this.min, max: this.max });

    if (this.form.valid) {
      this.calculate(this.min, this.max);
      this.showTable = true;
    }
  }

  calculate(min: number, max: number): void {
    const sequence = this.getFibonacciSequence(min, max);
    this.fibonacciTable = this.generateFibonacciTable(min, max, sequence);
    this.fibonacciSequence = sequence;
    this.dataSource.data = this.generateFibonacciTable(min, max, sequence);
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
    this.showTable = false;
    this.form.reset({min: 0, max: 1});
    const newData: IDataRow[] = [];
    this.dataSource.data = newData;
  }

  getDataValueByIndex(i : number) : number {
    this.dataSource.data.length;
    return i;
  }
}

interface IDataRow {
  index: number;
  val: number;
}
