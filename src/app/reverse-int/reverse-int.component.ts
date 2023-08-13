import { Component } from '@angular/core';
import { ReverseIntService } from '../reverse-int.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reverse-int',
  templateUrl: './reverse-int.component.html',
  styleUrls: ['./reverse-int.component.scss']
})
export class ReverseIntComponent {

  originalInt: number | undefined;
  reversedInt: number | undefined;
  // uint32 min and max
  maxInt = 7463847412
  minInt = -8463847412
  showNumber: boolean | undefined;
  inputControl = new FormControl(0, [Validators.required])

  form = new FormGroup({
    inputControl: this.inputControl
  })

  constructor(private reversedIntService: ReverseIntService) {
  }

  reset() {
    this.showNumber = false;
    this.form.reset();
    this.reversedInt = 0;
  }

  onSubmit() {
    if (!this.form.valid) return;
    this.reversedInt = this.reversedIntService.reverse(this.originalInt ?? 0);
    this.showNumber = true;
  }
}
