import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullStarRatingComponent } from './full-star-rating.component';

describe('FullStarRatingComponent', () => {
  let component: FullStarRatingComponent;
  let fixture: ComponentFixture<FullStarRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullStarRatingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FullStarRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
