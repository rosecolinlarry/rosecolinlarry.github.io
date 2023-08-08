import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseIntComponent } from './reverse-int.component';

describe('ReverseIntComponent', () => {
  let component: ReverseIntComponent;
  let fixture: ComponentFixture<ReverseIntComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReverseIntComponent]
    });
    fixture = TestBed.createComponent(ReverseIntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
