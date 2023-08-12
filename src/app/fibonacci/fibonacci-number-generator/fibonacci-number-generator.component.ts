import { Component, OnInit } from '@angular/core';
import { FibonacciService } from '../../fibonacci.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs';

@Component({
  selector: 'app-fibonacci-number-generator',
  templateUrl: './fibonacci-number-generator.component.html',
  styleUrls: ['./fibonacci-number-generator.component.scss']
})
export class FibonacciNumberGeneratorComponent implements OnInit {
  showNumber: boolean | undefined;
  form = new FormGroup({
    index: new FormControl(0, [Validators.required])
  })
  fibonacciNumber: number | undefined;

  constructor(private fibonacciService: FibonacciService) {
  }
  ngOnInit(): void {
    this.showNumber = false;
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.calculate(this.form.controls.index.getRawValue() ?? 0);
      this.showNumber = true;
    }
  }

  calculate(index: number) : void {
    this.fibonacciNumber = this.getFibonacciNumber(index);
  }
  getFibonacciNumber(index: number): number {
    return this.fibonacciService.calculateFibonacci(index);
  }

  reset() {
    this.showNumber = false;
    this.form.reset({index: 0});
  }
}
