import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.scss']
})

export class FibonacciComponent implements OnInit, OnChanges {
  @Input() modeControl = new FormControl()
  ngOnInit(): void {
    this.modeControl.setValue(mode.number);
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.modeControl.setValue(changes['mode'].currentValue);
  }

  isNumberMode(): boolean {
    return this.modeControl.value == mode.number;
  }

}
enum mode {
  "number",
  "sequence"
}
