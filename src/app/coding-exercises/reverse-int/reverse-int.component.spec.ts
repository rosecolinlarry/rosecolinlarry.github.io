import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseIntComponent } from './reverse-int.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ReverseIntComponent', () => {
  let component: ReverseIntComponent;
  let fixture: ComponentFixture<ReverseIntComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReverseIntComponent],
      imports: [MatFormFieldModule, ReactiveFormsModule, MatInputModule, BrowserAnimationsModule]
    });
    fixture = TestBed.createComponent(ReverseIntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
