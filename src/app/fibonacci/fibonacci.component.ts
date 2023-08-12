import { NgIf } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, NgControl, NgControlStatus } from '@angular/forms';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.scss']
})

export class FibonacciComponent implements OnChanges {
  @Input() modeControl = new FormControl("number")

  ngOnChanges(changes: SimpleChanges): void {
    this.modeControl.setValue(changes['mode'].currentValue);
  }

  isNumberMode(): boolean {
    return this.modeControl.value == "number";
  }

}
