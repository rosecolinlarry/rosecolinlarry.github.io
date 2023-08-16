import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CodingExercisesDashboardComponent } from './coding-exercises-dashboard.component';


describe('CodingExercisesDashboardComponent', () => {
  let component: CodingExercisesDashboardComponent;
  let fixture: ComponentFixture<CodingExercisesDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodingExercisesDashboardComponent]
    });
    fixture = TestBed.createComponent(CodingExercisesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
