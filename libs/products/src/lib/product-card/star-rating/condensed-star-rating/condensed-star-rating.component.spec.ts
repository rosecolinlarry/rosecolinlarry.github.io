import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CondensedStarRatingComponent } from './condensed-star-rating.component';

describe('CondensedStarRatingComponent', () => {
  let component: CondensedStarRatingComponent;
  let fixture: ComponentFixture<CondensedStarRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CondensedStarRatingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CondensedStarRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
