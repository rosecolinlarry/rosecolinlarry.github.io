import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReverseIntService } from '../fibonacci/services/reverse-int.service';

@Component({
  selector: 'app-reverse-int',
  templateUrl: './reverse-int.component.html',
  styleUrls: ['./reverse-int.component.scss']
})
export class ReverseIntComponent {

  pattern = '^-?[0-9]\\d*?$';
  originalInt: number | undefined;
  reversedInt: number | undefined;
  // uint32 min and max reversed
  maxInt = 7463847412
  minInt = -8463847412
  showNumber: boolean | undefined;
  inputControl = new FormControl(0, [Validators.required, Validators.pattern(this.pattern)])

  form = new FormGroup({
    inputControl: this.inputControl
  })

  constructor(private reversedIntService: ReverseIntService) {
  }

  reset() {
    this.showNumber = false;
    this.form.reset();
    this.form.controls.inputControl.setErrors(null);
    this.reversedInt = 0;
  }

  onSubmit() {
    if (!this.form.valid) return;
    this.reversedInt = this.reversedIntService.reverse(this.originalInt ?? 0);
    this.showNumber = true;
  }
}
